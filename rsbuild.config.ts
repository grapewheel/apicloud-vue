import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import klawSync from "klaw-sync";
import path from "node:path";
import os from "node:os";
import convert from "xml-js";
import fs from "node:fs";
import AutoImport from "unplugin-auto-import/rspack";
import Components from "unplugin-vue-components/rspack";
import { VantResolver } from "@vant/auto-import-resolver";

const isDev = process.env.NODE_ENV === "development";

// Collect the pages
function pages() {
  const pages = {};
  const vues = klawSync("./src/pages", {
    nodir: true,
    traverseAll: true,
    filter(file) {
      return path.extname(file.path) === ".vue";
    },
  });

  const pagesIndex = path.resolve(__dirname, "src/pages").length;

  vues.forEach((vue) => {
    let filename;
    if (process.platform !== "win32") {
      filename = vue.path.substring(pagesIndex + 1).replace(/\//g, "-");
    } else {
      filename = vue.path.substring(pagesIndex + 1).replace(/\\/g, "-");
    }
    const page = filename.substring(0, filename.lastIndexOf("."));

    pages[page] = {
      import: vue.path,
      library: {
        name: "apicloud",
        type: "window",
      },
    };
  });

  return pages;
}
// Get the local ip
function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const inface of interfaces[name]!) {
      const { address, family, internal } = inface;
      if (family === "IPv4" && !internal) {
        return address;
      }
    }
  }

  return "0.0.0.0";
}

// Change the entry
function rewriteXml(entry: string) {
  let xml = fs.readFileSync("./apicloud/config.xml", "utf8");
  const js = convert.xml2js(xml, { compact: true });

  // @ts-ignore
  js.widget.content._attributes.src = entry;
  xml = convert.js2xml(js, {
    compact: true,
    spaces: 4,
    ignoreComment: true,
  });

  fs.writeFileSync("./apicloud/config.xml", xml, "utf8");
}

const url = isDev
  ? `http://${getLocalIP()}:3000/${process.env.APP_ENTRY}.html`
  : `${process.env.APP_ENTRY}.html`;

rewriteXml(url);

const copy:
  | (
      | string
      | {
          from: string;
          to?: string;
        }
    )[]
  | undefined = ["./apicloud/config.xml"];
isDev && copy.push({ from: "./apicloud/vue.global.js", to: "js" });
!isDev &&
  copy.push({ from: "./apicloud/vue.runtime.global.prod.js", to: "js" });

export default defineConfig({
  plugins: [pluginVue()],
  dev: {
    lazyCompilation: false,
    writeToDisk: (file) => {
      return /config.xml$/.test(file);
    },
    assetPrefix: "./",
  },
  source: {
    entry: pages,
    alias: {
      "@": "./src",
    },
  },
  output: {
    assetPrefix: "./",
    filenameHash: false,
    distPath: {
      js: "js",
      css: "css",
    },
    externals: {
      vue: "Vue",
    },
    copy,
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          resolvers: [VantResolver()],
        }),
        Components({
          resolvers: [VantResolver()],
        }),
      ],
    },
    htmlPlugin(config, { entryName, entryValue }) {
      config.template = "./apicloud/page.ejs";

      config.title = entryName;
      config.templateParameters = {
        isDev,
      };
      config.scriptLoading = "blocking";
      config.minify = !isDev;
    },
  },
});

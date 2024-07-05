const { loadConfig, createRsbuild, logger } = require("@rsbuild/core");
const fs = require("fs");
const archiver = require("archiver");

async function zip() {
  const { content } = await loadConfig();
  const rsbuild = await createRsbuild({
    rsbuildConfig: content,
  });

  await rsbuild.build();

  const sourceDir = "./dist";
  const outputFile = "./widget.zip";

  const output = fs.createWriteStream("./widget.zip");
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  output.on("close", () =>
    console.info(
      `Archive created at ${outputFile}, with ${archive.pointer()} total bytes.`
    )
  );

  archive.on("error", (err) => console.error(err));
  archive.pipe(output);
  archive.directory(sourceDir, "widget");
  archive.finalize();
}

zip().catch((e) => {
  logger.error("Failed to build.");
  logger.error(err);
  process.exit(1);
});

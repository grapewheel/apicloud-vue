# APICLOUD-VUE 开发框架

Apicloud + Vue3 + Vant4 前端，利用 Rsbuild 打包项目，是一个采用 Vue 数据绑定特性和 Apicloud 手机操控能力相结合的 APP 开发框架，此框架**并非**采用 Vue 的 SPA 单页面应用方式，而是遵从 Apicloud 的多页面原生渲染效率方式，Vue+Rsbuild 只是为了提供更佳的 ES2015+语法、模块分割、剪裁打包和数据绑定代码体验，弥补 Apicloud 本身无法应用在庞大工程协作的缺点。

> 使用 APICLOUD-VUE 可以极速开发出流畅的商用级别 APP，让你轻松应付各种开发需求

> 采用最新[Rsbuild](https://rsbuild.dev/zh/) 构建，配合[Yonbuilder](https://developer.yonyou.com/product/appdevelopment/appdriven)实现极速开发、编译和维护，比上一代[AVVW](https://github.com/grapewheel/avvw)框架更快更轻量

# 案例展示

<img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/e2/8e/1fe28e1e-f6d2-03a0-1186-0a00afcd0890/AppIcon-0-0-1x_U007emarketing-0-0-0-4-85-220.png/246x0w.png" width="60" /> [知法乎](https://apps.apple.com/cn/app/id1454196247)

<img src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/e1/73/3c/e1733c05-0bd8-7277-c90d-137d9c598208/pr_source.png/300x0w.png" width="30%" /><img src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/7d/27/78/7d27784a-7bd6-b4b8-7530-a50d9fb882d6/pr_source.png/300x0w.png" width="30%" /><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/7f/b1/5b7fb1bb-a12a-c5d9-5952-8cef836dc956/pr_source.png/300x0w.png" width="30%" />

---

<img src="https://pp.myapp.com/ma_icon/0/icon_52641781_1600405942/96" width="60" /> [广州电台花城 FM](http://hcfm.gztv.com)

<img src="https://load.gztv.com/filedata/app/HCFMApp/downloadPage/contentbg.jpg" width="30%" />

---

<img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/b8/62/7f/b8627fa9-7aeb-a515-b255-c724ebf8b8a9/AppIcon-0-0-1x_U007emarketing-0-0-0-4-85-220.png/246x0w.png" width="60" /> [俭道](https://apps.apple.com/cn/app/俭道/id1517346440)

<img src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/0c/74/f8/0c74f834-9136-222d-6c4c-3443b59d4218/pr_source.png/300x0w.png" width="30%" /><img src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/17/cf/00/17cf000c-cd86-4be2-50dc-712c2d78b7f3/pr_source.png/300x0w.png" width="30%" /><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/87/80/79/8780798c-59ed-d29b-e111-2bab21f48bfe/pr_source.png/300x0w.png" width="30%" />

---

<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/82/78/5e/82785e42-02e3-4d50-b6be-6052042d54d2/AppIcon-0-0-1x_U007emarketing-0-0-0-4-85-220.png/246x0w.png" width="60" /> [易挖网](https://apps.apple.com/cn/app/易挖网/id1476913825)

<img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/7b/8a/57/7b8a5700-cf77-6289-c9cc-938bfa2d68bb/pr_source.jpg/300x0w.jpg" width="30%" /><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/e7/e1/80/e7e18013-dc6f-9f25-1bc1-df8bcaafc3e8/pr_source.jpg/300x0w.jpg" width="30%" /><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/f5/19/27/f519270b-bc88-98d7-dc99-4ba681f81c8e/pr_source.jpg/300x0w.jpg" width="30%" />

---

<img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/1b/d0/24/1bd024e3-b0e8-d069-b8f2-4788323443a0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-85-220.png/246x0w.png" width="60" /> [建老大](https://apps.apple.com/cn/app/建老大/id1504655165#?platform=iphone)

<img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/db/f2/cc/dbf2cc2a-27b1-2d7f-cda6-c0305ecf6b37/pr_source.jpg/300x0w.jpg" width="30%" /><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/0e/1e/c3/0e1ec37b-dc8a-fee6-34ad-8200e917c79b/pr_source.jpg/300x0w.jpg" width="30%" /><img src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/0b/5f/df/0b5fdf5c-e178-1519-e246-939110a7c1ec/pr_source.jpg/300x0w.jpg" width="30%" />

---

<img src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/ad/fb/0a/adfb0a51-c267-17b7-95e7-e5aab3ec1e48/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" width="60"> [武文浓墨](https://apps.apple.com/cn/app/id1504004849)

<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/8f/1d/39/8f1d3948-7b96-b9c2-a5e6-6261fb0c35a4/pr_source.png/300x0w.png" width="30%"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/95/12/a0/9512a082-b97e-2765-57b1-a038261a296f/pr_source.png/300x0w.png" width="30%"><img src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/5a/f7/1c/5af71cee-782c-4a30-edde-aa86215a0665/pr_source.png/300x0w.png" width="30%">

---

<img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/56/18/67/56186704-3228-bf3f-fa3c-4fd221a61757/AppIcon-0-0-1x_U007emarketing-0-0-0-4-85-220.png/246x0w.png" width="60"> [收货地址助手](https://apps.apple.com/cn/app/id1510714935)

<img src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/59/0f/5b/590f5bbd-c695-ba3d-5622-f245b9522c96/pr_source.jpg/300x0w.jpg" width="30%"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/5e/cd/c5/5ecdc562-252b-0c8b-133c-1aa8010bcb03/pr_source.jpg/300x0w.jpg" width="30%"><img src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ae/d6/55/aed65554-aeb1-b4ab-016b-702026d68375/pr_source.jpg/300x0w.jpg" width="30%">

# 目录结构

- dist 编译代码，压缩后上传到 Apicloud 发布 App
- src 源代码，所有开发在此开始，除 pages 目录外，其他目录可随意增删
  - components Vue 公用组件
  - libs 公共库
  - **pages** Apicloud 使用 openWin 和 openFrame 打开的页面，vue 组件化，支持**多级目录**
- public 静态资源，如图片、字体等，会自动打包到 dist 目录下
- apicloud `Rsbuild`编译时的模板文件，**不能随意修改，除非您知道自己在干什么**
  - vue.global.js 未压缩`vue`库，用于开发环境
  - vue.runtime.global.prod.js 压缩`vue`库，用于生产环境
  - page.ejs 将`pages`下 vue 文件编译为 Apicloud 可用的模板
  - config.xml `Apicloud`配置文件
- .env APP 应用入口
- 其他省略

# 开始使用

### 下载框架

git clone 或者 直接下载 master 包到本地

### 使用 YonStudio IDE 开发

在[YonBuilder 移动开发平台](https://developer.yonyou.com/product/appdevelopment/appdriven)下载并安装开发工具，运行工具后选择打开 git clone 下来的文件夹，在**终端**处 cd 进入项目目录下安装依赖

```bash
npm i # 初始化安装npm模块
```

### 修改 APICLOUD 配置

打开`./apicloud/config.xml`文件，对应修改你在[YonBuilder 移动开发平台](https://developer.yonyou.com/product/appdevelopment/appdriven)的应用设置，设置说明和注册应用请参考官方文档

```xml
<?xml version="1.0" encoding="UTF-8"?>
<widget id="[应用的Widget ID]" version="[版本号]">
  ...
  <content src="http://192.168.3.107:3000/home.html"/> // 无需修改，Rsbuild会自动修改
  ...
</widget>
```

### 修改 APP 应用入口

打开`.env`文件，对应`pages`下应用启动首次打开的页面名称来修改，例如`./src/pages/home.vue`，则填写为`home`

```
APP_ENTRY=home
```

### 终端开启本地测试服

```bash
npm run dev # 开启本地测试服
```

> **特别注意：如果你在开发时增加了./src/pages/里的页面，那么需要先关闭 dev，重新运行才会编译新页面，因为多入口热加载并不会检测新页面**

待本地测试服开启后，可以使用开发工具全量同步`dist`到手机 Apploader 进行调试

> 注意：只需同步一次，Apploader 第一次同步完成后，修改`./src`里的文件保存后手机自动同步和浏览器热加载一样！无需再手动同步一次！

> **特别注意：很多小伙伴发现开发时页面第一次加载比较慢，其实是因为手机从本地局域网电脑无线获取页面数据而导致的，但编译为发布包时，页面文件会一并打入 APP，所以开发时的页面加载速度可忽略！**

### 编译测试

```bash
 npm run build # 编译
```

编译后，使用开发工具将`dist`全量同步到 Apploader 进行预览

### 编译上传

```bash
 npm run zip # 打包
```

打包后，项目根目录会生成`widget.zip`，将其上传 [YonBuilder 的开发者平台](https://dbox.yonyoucloud.com)的“代码”处即可进行发布，或者直接使用开发工具上传代码包

# 开发细节

如无需高级配置，那么只需关注 src 目录下文件，这里说明一下`pages`文件：

### vue 支持

支持 vue3 选项式和组合式语法，也支持 vue 的 TS 语法，例子使用的是组合式语法和 JS 语法

> 由于框架并非采用 Vue 的 SPA，所以无法在多页面间使用 vue-router、vuex 之类的单页面应用的数据共享技术，而只能采用 Apicloud API 提供的相关页面跳转传递、数据共享技术

### 多级目录引用

Apicloud 引用打开多级目录页面时，以`./src/pages`作为根目录如下调用:

```js
api.openFrameGroup({
  name: "homeTabs",
  frames: [
    {
      name: "tab1",
      url: "./tabs-tab1.html", // 引用多级目录文件格式: ./[subdir]-[...]-[filename].html
    },
    {
      name: "tab2",
      url: "./tabs-tab2.html",
      bounces: true,
    },
    {
      name: "tab3",
      url: "./tabs-tab3.html",
    },
  ],
});
```

### 首页入口

框架默认 home.html 为 App 首页入口，你也可以修改其他页面为入口，只需修改`./.env`

```
APP_ENTRY=main # 修改home为main, eg.
```

### 本地预览

> 默认不支持，推荐使用开发工具同步到 Apploader 进行预览

如果你希望可以在本地电脑预览某个页面，你可以手动修改`./rsbuild.config.ts`中的`dev.writeToDisk`为`true`

```ts
  dev: {
    lazyCompilation: false,
    // writeToDisk: (file) => {
    //   return /config.xml$/.test(file);
    // },
    writeToDisk: true,
    assetPrefix: "./",
  },
```

然后在开发工具中右击选择`dist`中某个 html 页面，选择**实时预览**进行调试，此模式下也支持同步到手机预览，但同步速度慢，而且不支持热加载调试，不推荐使用！

### Apicloud API SDK

> 你可以在 vue 中直接使用 api.xxx

### ES6 支持

> 支持所有 ESNext 语法，但要注意的是如果你修改`apicloud`下的`page.ejs`，请不要使用 ES6 语法，因为 Rsbuild 默认没有转义模板文件，EJS 只支持纯 HTML 语法

### 按需异步加载

> 手机 CPU 和内存有限，而且 Apicloud 采用 Hybird 技术，在性能上尤其低端安卓上肯定大打折扣，所以使用按需加载、异步加载和懒加载会更好地让 App 保持流畅原生感

### TreeShaking

> Rsbuild 已配置针对 Vant 组件的剪裁，具体请看[官网](https://vant.pro/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi)，使用 Vant 组件时无需在`<script setup>`处`import`UI 组件，rsbuild 会自动按需引入并打包，但如果你`import`了，就不会 TreeShaking 组件，会增大 APP 体积，请留意！

### 开发编译内存溢出

> 有小伙伴在开发时发现页面过多时，热加载编译会出现内存溢出问题，已修改 npm run dev 的脚本命令增加 node 的运行时内存上限，如仍出现内存溢出，请继续上调 max_old_space_size 的值

package.json:

```json
"scripts" {
  "dev": "NODE_OPTIONS=--max_old_space_size=8192 rsbuild dev"
}
```

# 扩展使用

框架集成了[有赞 vant](https://vant.pro/vant/#/zh-CN) 4.9.1 前端框架，适用大部分需求，当然你也可以更换其他 Vue 前端框架。

---

_Copyright by [Grape Studio](https://github.com/grapewheel?tab=repositories)_  
_QQ 群 492968709_

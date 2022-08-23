# atomic.css

## 介绍

参考 [tailwindcss](https://www.tailwindcss.cn/)，纯 [sass](https://sass-lang.com/documentation/) 开发，拿来即用的原子类CSS库。

## 使用

1. 复制 "dist/atom.css" 或 "dist/atom.min.css" 至项目的样式文件夹；
2. 使用 `@import ./path/to/atom.min.css;` 指令在其他文件内引入并使用；
3. 在 HTML 节点上使用 atom.css 提供的类名，类命名与 [tailwindcss](https://www.tailwindcss.cn/docs/container) 基本一致。

> 部分功能（变体、断点）暂未实现。

### 删除未使用 css

如果觉得构建或发布项目时样式文件太大，可以安装插件删除未使用的 css。

使用方法：

如果项目中已有构建工具，可参考 [uncss](https://github.com/uncss/uncss) 文档进行编写，或者直接使用 [tailwindcss](https://www.tailwindcss.cn/)。

---

如果没有构建工具，比如在**微信小程序**中使用，这里使用 [gulp-uncss](https://github.com/ben-eb/gulp-uncss)，具体步骤如下：

第一步：在项目根目录新建 gulpfile.js

第二步：安装依赖 `npm install -D gulp gulp-postcss postcss-uncss`

第三步：编写 gulpfile.js

```javascript
// gulpfile.js

let gulp = require('gulp')
let postcss = require('gulp-postcss')
let uncss = require('postcss-uncss')

gulp.task('uncss', function () {
  let plugins = [
    uncss({
      html: ['pages/**/*.wxml']
    }),
  ]
  return gulp.src('./path/to/atom.min.wxss')
    .pipe(postcss(plugins))
    // 在 dist 目录生成新的文件，这样就要引入 dist 目录中的样式文件了！
    .pipe(gulp.dest('./dist'))
})
```

第四步：打开开发者工具右上角“详情”面板，选择“本地设置”，勾选“启用自定义处理命令”，在“预览前预处理”或“上传前预处理”中输入 `gulp uncss`，这样预览或上传前就会把未使用的样式删除。

> 使用 `gulp uncss` 会在目标文件夹内生成新的文件，注意文件引入！

## 定制

atomic.css 拥有灵活的配置项，便于实现自己的原子类库：

* 自定义 CSS 公共前缀
* 自定义 CSS 连接符
* 自定义 CSS 样式命名
* 自定义 CSS 变量命名
* 自定义 CSS 颜色
* 自定义 CSS 响应式断点
* 自定义 CSS 样式合并

### 开发

第一步：将源码克隆到本地 `git clone git@gitee.com:liiiiiiu/atomic.css.git`

第二步：安装并使用 glup

源码内所有样式依赖于 sass 的函数指令生成，最终通过 gulp 转换成 css 文件：

```shell
# 进入源码根目录
cd atomic.css

# 安装所有依赖包
npm install

# 执行 gulp 命令
gulp
```

> 执行 gulp 命令后，会监听文件变化并在 dist 目录生成新的编译后的 css 文件。

第三步：修改配置文件 "src/default.scss" 内的各配置项

```css
/* 自定义公共前缀 */
/**
 * $atomic-prefix: '';
 * => .w-screen { width: 100vw; }
 */
$atomic-prefix: 'my';
=> .my-w-screen { width: 100vw; }

/* 自定义单一连接符 */
/**
 * $atomic-connector: '-';
 * => .w-screen { width: 100vw; }
 */
$atomic-connector: '_';
=> .w_screen { width: 100vw; }

/* 自定义多连接符 */
/**
 * $atomic-connectors: ();
 * => .max-w-full { max-width: 100%; }
 */
$atomic-connectors: ('_', '_');
=> .max_w_full { max-width: 100%; }

/* 自定义样式命名 */
/**
 * $atomic-width-name: w;
 * => .w-screen { width: 100vw; }
 */
$atomic-width-name: wth;
=> .wth-screen { width: 100vw; }

/* 自定义颜色 */
/**
 * brand 代表主题色
 * $atomic-color-brand-base: #1890ff;
 * => .text-brand { color: #1890ff; }
 */
$atomic-color-brand-base: #52c41a;
=> .text-brand { color: #52c41a; }
=> .text-brand-50 { color: #f6fcf4; }
=> ...
=> .text-brand-900 { color: #63ca31; }

=> .bg-brand { color: #52c41a; }
=> .bg-brand-50 { color: #f6fcf4; }
=> ...
=> .bg-brand-900 { color: #63ca31; }
```

*全部配置项查看 "src/default.scss"。*

第四步：复制新生成的文件替换当前项目内的文件。

#### 自定义样式

在使用UI框架时，为了满足开发需求，会对部分框架内的组件进行样式覆盖；

你可以将已有的覆盖样式或基础样式复制到源码 `src/attemp.scss` 文件内；

gulp 监听到文件变化后会将这些样式与源码合并生成一份新的 css 文件；

在以后使用相同UI框架开发其他项目时，就可以直接套用了。

## 问题

由于微信小程序有自己的响应式单位 rpx，有可能会有 rem 失效的问题，可以使用 [page-meta](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html) 解决。

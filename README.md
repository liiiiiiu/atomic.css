# atomic.css

## 介绍

参考 [tailwindcss](https://www.tailwindcss.cn/)，使用 [sass](https://sass-lang.com/documentation/) 开发，拿来即用的原子类CSS库。

## 使用

atomic.css 总共发布了 3 套样式文件及对应的压缩版，存放在 dist 目录下：

1. atom.css 常规样式文件；
2. atom.wxss 适配微信小程序的样式文件；
3. atom.breakpoint.css 包含响应式断点的样式文件。

按需选择上述文件复制到你的项目内使用即可。

### 删除未使用 css

如果觉得样式文件太大，可以安装插件删除未使用的 css。

使用方法：

如果项目中有构建工具（vite、webpack），可参考 [uncss](https://github.com/uncss/uncss) 文档进行编写，或者直接使用 [tailwindcss](https://www.tailwindcss.cn/)。

---

如果没有构建工具，比如在**微信小程序**中使用，这里使用 [gulp-uncss](https://github.com/ben-eb/gulp-uncss)，具体步骤如下：

第一步：安装依赖 `npm install -D gulp gulp-postcss postcss-uncss`

第二步：在项目根目录新增 gulpfile.js

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
    // 执行 gulp.dest 会在 dist 目录生成新的文件，注意引入路径的变化（也可以直接覆盖之前的路径）！
    .pipe(gulp.dest('./dist'))
})
```

第三步：打开开发者工具右上角“详情”面板，选择“本地设置”，勾选“启用自定义处理命令”，在“预览前预处理”或“上传前预处理”中输入 `gulp uncss`，这样预览或上传前就会把未使用的样式删除。

> 使用 `gulp uncss` 会在目标文件夹内生成新的文件，注意文件引入！

## 定制

atomic.css 拥有灵活的配置项，便于实现自己的原子类库：

* 自定义公共前缀
* 自定义分隔符
* 自定义样式名缩写
* 自定义主题
* 自定义响应式断点
* 自定义样式合并

### 开发

第一步：将源码克隆到本地 `git clone git@github.com:liiiiiiu/atomic.css.git`

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

第三步：修改根目录配置文件 atom.config.js 内的各配置项，重新执行 `gulp` 命令

第四步：复制新生成的文件替换当前项目内的文件。

### 自定义样式

如果你需要将自己的一些样式合并到 atomic.css，可以把这些样式复制到根目录 atom.attemp.scss 内；

gulp 监听到文件变化后会将这些样式与源码合并生成一份新的 css 文件。

## 问题

由于微信小程序有自己的响应式单位 rpx，有可能会有 rem 失效的问题，可以使用 [page-meta](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html) 解决，或者修改配置文件内的 `rem2rpx` 参数进行单位转换。

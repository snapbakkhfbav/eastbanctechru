// 进行 Sass 编译以及雪碧图处理
var argv = require('yargs').argv,
    lazysprite = require('postcss-lazysprite');

module.exports = function(gulp, common) {
  if (argv.debug) {
  } else {
  }

  gulp.task('sass', '进行 Sass 编译以及雪碧图处理（框架自带 Watch 机制监听 Sass 和图片变化后自行编译，不建议手工调用本方法）', function () {
    return gulp.src('../project/**/*.scss')
               .pipe(common.plugins.sass({outputStyle: 'expanded'}).on('error', common.plugins.sass.logError))
               .pipe(common.plugins.postcss([lazysprite({
                 cssSeparator: "_",
                 imagePath: common.config.imagesSourcePath,
                 stylesheetPath: '../../public/style/css',
                 spritePath: common.config.imagesResultPath,
                 smartUpdate: true,
                 nameSpace: common.config.prefix + "_"
               })]))
               .pipe(gulp.dest('../../public/style/css'));
  });
};
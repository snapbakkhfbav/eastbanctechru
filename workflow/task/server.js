/**
 * Tencent is pleased to support the open source community by making QMUI Web available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */


// server 监视文件改动并重新载入
module.exports = function (gulp, common) {
  gulp.task('server', function () {

    var _showLog = function () {
      if (common.config.browserSyncShowLog) {
        return 'info';
      }
      return 'silent';
    }

    common.browserSync.init({
      server: {
        // 静态路径根目录
        baseDir: common.config.htmlResultPath,
        // 设置路由
        routes: common.config.browserSyncServerRoute
      },
      logLevel: _showLog(),
      logPrefix: common.plugins.util.colors.gray(common.lib.getCurrentTime()),
      startPath: common.config.browserSyncStartPath,
      port: common.config.browserSyncPort
    });
    gulp.watch(common.config.browserSyncWatchPath).on('change', common.reload);
  });
};

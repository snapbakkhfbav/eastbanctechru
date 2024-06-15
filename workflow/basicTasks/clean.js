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


// 清理多余文件
var del = require('del');

module.exports = function (gulp, common) {

    var taskName = 'clean';

    gulp.task(taskName, function (done) {
        // force: true 即允许 del 控制本目录以外的文件
        del(common.config.cleanFileType, {force: true});
        common.util.log('Clean', '清理所有的 ' + common.config.cleanFileType + ' 文件');

        done();
    });

    // 任务说明
    common.tasks[taskName] = {
        description: '清理多余文件（清理内容在 config.json 中配置）'
    };
};

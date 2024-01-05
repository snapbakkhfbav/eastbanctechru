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


// gulpfile.js QMUI Web Gulp 工作流
var gulp = require('gulp-help')(require('gulp'), {
             description: '展示这个帮助菜单',
             hideDepsMessage: true
           }),
    fs = require('fs'),
    common = require('./workflow/common.js');

// 载入任务
var taskPath = 'workflow/task';

fs.readdirSync(taskPath).filter(function (_file) {
  return _file.match(/js$/); // 排除非 JS 文件，如 Vim 临时文件
}).forEach(function (_file) {
  require('./' + taskPath + '/' + _file)(gulp, common);
});

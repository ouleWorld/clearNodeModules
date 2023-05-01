#!/usr/bin/env node
const fs = require('fs');

// 建议运行之前先使用git 保存号项目，以免文件运行出错
const clearNodeModules = (path) => {
  const fileList = fs.readdirSync(path);
  fileList.forEach((ele) => {
    const curPath = `${path}/${ele}`;
    const states = fs.statSync(curPath);
    if (states.isDirectory()) {
      if (ele === 'node_modules') {
        // 删除文件夹
        console.log('删除文件夹：', curPath);
        fs.rmSync(curPath, { recursive: true, force: true });
      } else {
        clearNodeModules(curPath);
      }
    } else {
      // console.log(`${curPath} 不是一个文件夹！`)
    }
  });
};

// 脚本作用：清理一个文件夹下所有的 node_modules 文件(子文件夹中的内容也会被清理)
// node 版本要求：16+
const __main = () => {
  // 需要清理文件夹的路径
  const path = process.cwd();
  clearNodeModules(path);
};

__main();

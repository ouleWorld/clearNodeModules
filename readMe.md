# what

在备份文件时，经常需要备份一些自己写的代码，但是这些代码有一个很大问题：
node_modules 文件其实是不需要备份的！

因此我们需要一个工具：删除目录下所有的 node_modules 文件

而这个工具就是为了解决这个问题的

# 作用

清除当前目录及子目录下所有的 node_modules 文件夹

# 环境要求

node 版本要求：16+

# 使用

## install

建议全局安装！

```
npm install ouale_clearnodemodules -g
```

## run

```
clearNodeModules
```

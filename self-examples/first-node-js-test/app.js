const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var qr = require('qr-image');
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

/*
一，nodejs是啥？
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
可以看成运行在服务端的 JavaScript
Node.js 的包管理器 npm，是全球最大的开源库生态系统。

二，npm开发者指南
网址：https://docs.npmjs.com/misc/developers
查看npm的相关主题文档的命令：
man npm-thing
or 
npm help thing

1，npm是啥？
npm文档：https://docs.npmjs.com/getting-started/what-is-npm
npm用来开发/发布/部署前端项目的一个javascript包管理器。npm是全球最大的软件注册机构，该注册表包含超过600,000个js包（构建块代码），开发人员使用npm来共享和借用软件包，也可使用npm来管理私有开发。类似后台的maven
npm由三个不同的组件组成：
1）网站 ：管理包的网站，可以在该网站上查看是否已经存在有第三方包
2）命令行界面（CLI）：在终端中运行，大多数开发人员与npm交互的方式
2）注册表：是JavaScript的软件和元信息的大型公共数据库，类似maven repository

2，npm的用途

3，如何选择/安装本地软件包？
查询/选择需要的软件包：https://www.npmjs.com/ 搜索后查看
下载/安装有两种方式：
本地安装：当自己的应用需要引入某个包模块，即使用像Node.js的require或者import方式引入包，则需要本地安装。直接执行：npm install <包名>

全局安装：想将包作为命令行工具（？？），则需要全局安装。

如何选择要引入的包的版本呢？


管理本地安装的npm软件包的最好方法是创建一个 package.json文件
什么是npm中所谓的包（package）呢？
包可以是：
1）一个包含有package.json文件的文件夹  ：node.js应用都包含该文件
2）包含有package.json的文件夹的压缩包
3）一个指向package.json的文件夹的压缩包/文件夹的url
4） a <name>@<version> that is published on the registry with (c)
5） a <name>@<tag> that points to (d)
6） a <name> that has a "latest" tag satisfying (e)
7） a git url that, when cloned, results in (a).

即使不使用npm来发布前端应用，也可以用来打包或者上传到git。这就需要package.json来完成相关的配置

npn的package.json的配置详解
1，可以先进入应用的根目录，然后执行npm-init命令根据提示填写内容，生成一个最基本的package.json文件
npm init命令详见:https://docs.npmjs.com/cli/init
package.json的使用：https://docs.npmjs.com/getting-started/using-a-package.json
package.json配置说明详见：https://docs.npmjs.com/files/package.json
对生成的package.json文件标注

如何更新安装了的包？
执行命令：
npm update在与package.json要更新的应用程序的文件相同的目录中运行。
运行npm outdated。不应该有任何结果。

如何卸载已经安装了的本地包？
npm uninstall [--save-dev/prod] <包名>
=========================================================

*/
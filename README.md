这是一个工具库 包含常用的工具方法

docs 内是改工具库的文档 使用（Docusaurus）这个库写的

下个版本

```
npm version patch
```

发布

```
npm publish
```

删除 

```
npm unpublish 包名 --force
```

命令更新package.json中的版本号

```
/* 备注：
    1.这个命令只是改变package.json中的version版本号
  2.命令行输入后会返回改变的版本;
  3.成功后npm publish
 */
// patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1
npm version patch
// minor：次版本号，增加新功能，如 v1.0.0-> v1.1.0
npm version minor
// major：主版本号，不兼容的修改，如 v1.0.0 -> v2.0.0
npm version major
// 命令用于将您的npm包版本标记为预发布版本
npm version prerelease 1.3.5 -> 1.3.6-0
/*-preid参数介绍(备注：修改后会自动git提交一个记录)
- alpha: 代表内部测试版，会有很多Bug，是比beta更早的版本，一般不建议对外发布
- beta: 相对alpha版本已有了很大的改进的测试版本
- rc：Release Candidate顾名思义就是正式发布的候选版本。

//  1.8.1 > 1.8.2-alpha.0 正常版本会加1,如果是测试版本只是改后缀
npm version prerelease --preid=alpha
// 1.8.1 > 1.8.2-beta.0 正常版本会加1,如果是测试版本只是改后缀
npm version prerelease --preid=beta
// 1.8.1 > 1.8.2-rc.0 正常版本会加1,如果是测试版本只是改后缀
npm version prerelease --preid=rc
*/

```

发布测试包

```
npm publish --tag=beta
npm publish --tag alpha
npm publish --tag rc

// 修改为tag
npm dist-tag add test-npm-tag@1.1.0-beta.1  beta
// 修改为latest
npm dist-tag add test-npm-tag@1.1.0 beta latest

```

单独更新

```
npm install 包名 @latest
npm i 包名 -f

```

清理缓存

```
npm cache clean --force

```


# strapi-provider-upload-qiniu-server

## Usage

### Install

```
npm install strapi-provider-upload-qiniu-server --save
```

### Input Config Parameter

open the `custom.json` file in your project root path(/config/custom.json),input below paramters.

```json
{
  ...
  "qiniu": {
    "accessKey": "",
    "secretKey": "",
    "bucket": "",
    "qiniuPrefixPath": "",
    "selfServerUrl": ""
  }
  ...
}
```

accessKey,secretKey,bucket which get from your Qiniu web console platform.  
qiniuPrefixPath : add the prefix to the filename , result is qiniuPrefixPath + filename  
Example: north/site/+ test.png ==> north/site/test.png  
selfServerUrl: your self server url which you has configurate in Qiniu .

if you have any question about the package , please contact me by email or create an issue.

## Description For Chinese

因为使用七牛云的用户大部分是中国人，为了方便大家使用，做一些中文说明，希望能帮助到您。  
在项目的根目录执行安装命令，其次是关于配置文件的说明。
accessKey,secretKey,bucket，这这些都是您的七牛云的开发者模式的里面的信息，去网站上面找一下就知道，我就不多说了。  
qiniuPrefixPath 参数表面，你需要给文件重命名为什么，默认情况下，上传到七牛云的对象存储里面，是没有文件夹层级的概念，这样管理文件非常不方便，但是，可以修改文件名为/xxx/xx/xx.png ，这样不管是搜索文件，还是在 url 里面显示文件，都类似于文件夹层级的模式，比较方便使用和管理文件。  
selfServerUrl 是您在七牛云上面配置其他文件的 cnd 加速域名，如果您没有配置，就使用七牛云的默认的 url 就可以，如果获取呢？打开上传的文件，右边更多-->复制外连接,就可以获得了。

## Resources

- [MIT License](LICENSE.md)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

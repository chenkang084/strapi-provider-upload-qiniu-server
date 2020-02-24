# strapi-provider-upload-qiniu

## Usage

### Install

```
npm install strapi-provider-upload-qiniu --save
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

## Resources

- [MIT License](LICENSE.md)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

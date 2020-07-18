const HtmlWebpackPlugin = require('html-webpack-plugin');
class InlineSourcePlugin{
  constructor({match}){
    this.reg = match;
  }

  // 处理某一个标签
  processTag(tag, compilation){
    // console.log(tag)
    let newTag, url;
    if(tag.tagName === 'link' && this.reg.test(tag.attributes.href)){
      newTag = {
        tagName: 'style',
        attributes:{type:'text/css'}
      }
      url = tag.attributes.href;
    }
    if(tag.tagName === 'script' && this.reg.test(tag.attributes.src)){
      newTag = {
        tagName: 'script'
      }
      url = tag.attributes.src;
    }
    if(url){
      newTag.innerHtml = compilation.assets[url].source();  // 文件内容放到innerHTML属性上
      delete compilation.assets[url];  // 删除原有应该生成的资源
      return newTag;
    }
    return tag;
  }


  // 处理引入标签的数据
  processTags(data, compilation){
    let headTags = [];
    let bodyTags = [];
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag,compilation));
    });
    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag,compilation));
    });
    return { ...data, headTags, bodyTags}
  }

  apply(compiler){
    // 要通过webpackPlugin 来实现这个功能
    compiler.hooks.compilation.tap('InlineSourcePlugin',(compilation)=>{
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync('alterPlugin',(data, cb)=>{
        // console.log(data);
        data = this.processTags(data,compilation);
        cb(null, data);
      })
    })
  }
}

module.exports = InlineSourcePlugin;
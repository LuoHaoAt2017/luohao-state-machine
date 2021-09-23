import developer from '../utils/developer';
import jquery from 'jquery';

// 自定义代码
export default function CustomApis(formInstance, javascript) {
  this.$form = formInstance;
  this.init(javascript);
}

CustomApis.prototype.init = function(javascript) {
  // 动态创建函数
  javascript = this.format(javascript);
  const customApiFunc = new Function('developer', 'jquery', javascript);
  const customApi = customApiFunc(developer, jquery);
  if (customApi.OnLoad) {
    this.OnLoad = customApi.OnLoad.bind(this);
  }
  if (customApi.OnValidate) {
    this.OnValidate = customApi.OnValidate.bind(this);
  }
  if (customApi.BeforeSubmit) {
    this.BeforeSubmit = customApi.BeforeSubmit.bind(this);
  }
  if (customApi.AfterSubmit) {
    this.AfterSubmit = customApi.AfterSubmit.bind(this);
  }
  this.$form.batchAllField((dataField, control) => {
    this[dataField] = new CustomApiProxy(dataField, control);
  });
}

CustomApis.prototype.format = function(javascript) {
  // $.IOpenLink => developer.IOpenLink
  javascript = javascript.replace(/\$.I/g, 'developer.I');
  javascript = `try {
    var $ = function(a, b) { return jquery(a, b); }
    $.JForm = {};
    ${javascript}
  } catch(err) {
    console.error(err);
  } finally {
    return $.JForm; // 返回定义代码对象
  }`;
  return javascript;
}

function CustomApiProxy(dataField, control) {

}
function FormNumber() {

}


// 当控件为空时，返回的默认值
FormNumber.prototype.$emptyVal = function() {
  return '';
}
// 控件的值类型（Number, String, Array, Boolean, Object）
FormNumber.prototype.$valueType = Number;

// 初始化控件的取值和赋值逻辑，若设置会覆盖默认的get和set。
FormNumber.prototype.$initValue = function() {
  
}
// 在控件赋值时调用
FormNumber.prototype.$setValue = function(value) {
  // 劫持数据，进行处理，返回处理后的数据
  return value;
}
// 在控件取值时调用
FormNumber.prototype.$getValue = function(value) {
  // 劫持数据，进行处理，返回处理后的数据
  return value;
}
// 在控件参与计算规则、隐藏规则的运算时，调用的取值方法
FormNumber.prototype.$getRuleValue = function() {
  
}
// 控件的自定义校验方法，在业务层校验时调用
FormNumber.prototype.$validate = function() {
  return true;
}
// 控件的值被保存/提交时，调用的取值方法
FormNumber.prototype.$saveDataField = function() {
  
}
// 清空控件的值
FormNumber.prototype.$clearValue = function() {

}

export default FormNumber;
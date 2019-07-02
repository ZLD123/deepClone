function deepClone(obj) {
  var copy
  
  // 判断、处理3种基础类型，和null、undefined
  if (obj === null || typeof obj !== 'object') return obj
  
  // 处理日期
  if (obj instanceof Date) {
    copy = new Date()
    //obj转换时间戳，再由时间戳转换时间赋值给copy
    copy.setTime(obj.getTime())
    return copy
  }
  
  // 处理数组
  if (obj instanceof Array) {
    copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i])
    }
    return copy
  }
  
  // 处理函数
  if (obj instanceof Function) {
    copy = function() {
      //this转移指向obj
      return obj.apply(this, arguemnts)
    }
    return copy
  }
  
  // 处理对象
  if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      //判断obj是否拥有当前attr所对应的属性或对象，有返回true，否则返回false
      if (obj.hasOwnProperty(attr)) 
        copy[attr] = deepClone(obj[attr])
    }
    return copy
  }
  
  throw new Error("Unable to copy obj as type isn't suported" + obj.constructor.name)
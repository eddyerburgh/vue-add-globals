module.exports = function (options) {
  return {
    install: function (Vue) {
      Object.keys(options.methods).forEach(key => {
        Vue.prototype[key] = options.methods[key]
      })
    }
  }
}

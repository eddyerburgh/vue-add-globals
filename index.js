module.exports = function (globals) {
  return {
    install: function (Vue) {
      Object.keys(globals).forEach(key => {
        Vue.prototype[key] = globals[key]
      })
    }
  }
}

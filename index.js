module.exports = function (Vue, globals) {
  Object.keys(globals).forEach(function (key) {
    Vue.prototype[key] = globals[key]
  })
}

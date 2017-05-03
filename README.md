# vue-add-globals

Add globals to Vue. Use it in tests to mock global methods and properties.

## Example

Adding an instance method
```js
import addGlobal from 'vue-add-global'
import Vue from 'vue'
import Component from 'Component.vue'

const mockedMethod = () => ({})
const globals = addGlobal({ $mockedMethod: mockedMethod })
Vue.use(globals)

const Ctor = Vue.extend(Component)
const vm = new Ctor().$mount()
expect(vm.$mockedMethod).to.equal(mockedMethod)
```

## Installation

```shell
npm install --save-dev vue-add-globals
```
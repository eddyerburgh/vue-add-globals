# vue-add-globals

Add globals to Vue. Use it in tests to mock global methods, directives and mixins.

## Example

Adding an instance method
```js
import addGlobal from 'vue-add-global'
import Vue from 'vue'
import Component from 'Component.vue'

const mockedMethod = () => ({})
Vue.use(addGlobal({ methods: { $mockedMethod: mockedMethod } }))

const Ctor = Vue.extend(Component)
const vm = new Ctor().$mount()
expect(vm.$mockedMethod).to.equal(mockedMethod)
```

## Installation

```shell
npm install --save-dev vue-add-globals
```
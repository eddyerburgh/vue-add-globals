# vue-add-globals

Add globals to Vue. Use it in tests to mock global methods and properties.

## Example

Adding an instance method
```js
import addGlobals from 'vue-add-globals'
import Vue from 'vue'
import TestComponent from 'TestComponent.vue'

const mockedMethod = () => ({})
const globals = addGlobals({ $mockedMethod: mockedMethod })
Vue.use(globals)

const Ctor = Vue.extend(TestComponent)
const vm = new Ctor().$mount()
expect(vm.$mockedMethod).to.equal(mockedMethod)
```

## Installation

```shell
npm install --save-dev vue-add-globals
```

## Usage

* Import 'vue-add-globals'
* Call it with object of global properties to add
* Add the globals with Vue.use()

```js
import addGlobals from 'vue-add-globals'

const globals = addGlobals({ $mockedMethod: mockedMethod })
Vue.use(globals) // $mockedMethod is now available globally as an instance method
```
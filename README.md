# vue-add-globals

Add globals to Vue. Use it in tests to mock global methods and properties.

## Example

Adding a property and method to Vue

```js
import addGlobals from 'vue-add-globals'
import Vue from 'vue'

const $someMethod = () => ({})
const someProp = 'prop'
addGlobals(Vue, {
  $someMethod: $someMethod,
  someProp: someProp
})
const Ctor = Vue.extend(TestComponent)
const vm = new Ctor().$mount()

t.is(vm.$someMethod, $someMethod)
t.is(vm.someProp, someProp)
```

## Installation

```shell
npm install --save-dev vue-add-globals
```

## Usage

* Import 'vue-add-globals'
* Call it with object of global properties to add

```js
import addGlobals from 'vue-add-globals'

addGlobals(Vue, { $mockedMethod: mockedMethod })
```

You can keep the global Vue class clean by using `Vue.extend()`:

```js
import addGlobals from 'vue-add-globals'
import Vue from 'vue'

const freshVue = Vue.extend()

addGlobals(freshVue, { $mockedMethod: mockedMethod })
```
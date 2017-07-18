import test from 'ava'
import { compileToFunctions } from 'vue-template-compiler'
import Vue from 'vue'
import addGlobals from '../index'
import TestComponent from './components/TestComponent.vue'

test('adds instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  const freshVue = Vue.extend()
  addGlobals(Vue, {
    $injectedMethod
  })
  const Ctor = freshVue.extend(compileToFunctions('<div />'))
  const vm = new Ctor().$mount()

  t.is(vm.$injectedMethod, $injectedMethod)
})

test('adds multiple instance props to vue', (t) => {
  const aProperty = 1
  const $injectedMethod = () => 'string'
  const freshVue = Vue.extend()
  addGlobals(Vue, {
    $injectedMethod,
    aProperty
  })
  const Ctor = freshVue.extend(compileToFunctions('<div />'))
  const vm = new Ctor().$mount()

  t.is(vm.$injectedMethod, $injectedMethod)
  t.is(vm.aProperty, aProperty)
})

test('adds instance properties to Vue, using README example', (t) => {
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
})

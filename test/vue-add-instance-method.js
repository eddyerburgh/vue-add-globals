import avoriaz, { mount } from 'avoriaz'
import test from 'ava'
import { compileToFunctions } from 'vue-template-compiler'
import Vue from 'Vue'
import addGlobals from '../index'
import TestComponent from './components/TestComponent.vue'

test('adds instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  avoriaz.use(addGlobals({
    $injectedMethod
  }))
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.is(wrapper.vm.$injectedMethod, $injectedMethod)
})

test('adds multiple instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  const $anotherMethod = () => 1
  avoriaz.use(addGlobals({
    $injectedMethod,
    $anotherMethod
  }))
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.is(wrapper.vm.$injectedMethod, $injectedMethod)
  t.is(wrapper.vm.$anotherMethod, $anotherMethod)
})

test('adds instance properties to Vue, using README example', (t) => {
  const mockedMethod = () => ({})
  const globals = addGlobals({ $mockedMethod: mockedMethod })
  Vue.use(globals)

  const Ctor = Vue.extend(TestComponent)
  const vm = new Ctor().$mount()
  t.is(vm.$mockedMethod, mockedMethod)
})

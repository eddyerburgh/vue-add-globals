import avoriaz, { mount } from 'avoriaz'
import test from 'ava'
import { compileToFunctions } from 'vue-template-compiler'
import injectVue from '../index'

test('adds instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  avoriaz.use(injectVue({
    $injectedMethod
  }))
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.is(wrapper.vm.$injectedMethod, $injectedMethod)
})

test('adds multiple instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  const $anotherMethod = () => 1
  avoriaz.use(injectVue({
    $injectedMethod,
    $anotherMethod
  }))
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.is(wrapper.vm.$injectedMethod, $injectedMethod)
  t.is(wrapper.vm.$anotherMethod, $anotherMethod)
})

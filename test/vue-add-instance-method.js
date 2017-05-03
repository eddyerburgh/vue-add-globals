import avoriaz, { mount } from 'avoriaz'
import test from 'ava'
import { compileToFunctions } from 'vue-template-compiler'
import injectVue from '../index'

test('adds instance method to vue', (t) => {
  const $injectedMethod = () => 'string'
  avoriaz.use(injectVue({
    methods: {
      $injectedMethod
    }
  }))
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.is(wrapper.vm.$injectedMethod, $injectedMethod)
})

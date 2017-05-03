import { mount } from 'avoriaz'
import test from 'ava'
import { compileToFunctions } from 'vue-template-compiler'

test('renders a div with class bar', (t) => {
  const compiled = compileToFunctions('<div />')
  const wrapper = mount(compiled)
  t.true(wrapper.is('div'))
})

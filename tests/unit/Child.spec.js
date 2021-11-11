import { shallowMount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('Child.vue', () => {
  it('increments count when increment method is called', () => {
    const wrapper = shallowMount(Child)
    
    expect(wrapper.element.textContent).toBe('0')

    wrapper.vm.increment() // This will fail with "TypeError: wrapper.vm.increment is not a function"
    expect(wrapper.element.textContent).toBe('1')
  })
})

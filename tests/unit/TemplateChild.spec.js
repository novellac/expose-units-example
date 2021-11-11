import { shallowMount } from '@vue/test-utils'
import TemplateChild from '@/components/TemplateChild.vue'

describe('TemplateChild.vue', () => {
  it('increments count when increment method is called', async () => {
    const wrapper = shallowMount(TemplateChild)
    
    expect(wrapper.element.textContent).toBe('0')
    await wrapper.vm.increment() // This will pass
    expect(wrapper.element.textContent).toBe('1')
  })
})

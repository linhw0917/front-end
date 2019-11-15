import Vue from 'vue'
import register from '@/views/loginning/register'

describe('register.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(register);
    const vm = new Constructor().methods
	vm.checkingTime()
    expect(vm.recordingTime)
      .toBe(0)
  })
})

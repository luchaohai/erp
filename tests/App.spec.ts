// 基于App.vue文件生成对应的单元测试代码
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { describe, it, expect } from 'vitest'

describe('App.vue', () => {
  it('renders the app component', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })
})
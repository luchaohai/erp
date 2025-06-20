import { mount } from '@vue/test-utils';
import TestComponent from '@/views/test.vue';
import { describe, it, expect } from 'vitest'

describe('TestComponent.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('has the correct title', () => {
    const wrapper = mount(TestComponent);
    const title = wrapper.find('div'); // 假设有一个h1标题
    expect(title.text()).toBe('Hello world'); // 替换为实际标题
  });

  // 添加更多测试用例
});

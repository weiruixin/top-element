# 需求分析文档

## 用户调研摘要

- **用户痛点**：当前市场上的组件库在按钮设计上存在样式单一、交互性不强、自定义程度低等问题。
- **期望功能**：用户期望组件库的按钮组件能够提供多样化的样式选择、丰富的交互效果以及高度的自定义能力。
- **安全性需求**：用户需要按钮组件在保证功能性的同时，也要确保数据的安全性和操作的可靠性。

## 竞品对比报告

- **竞品 A**：提供了基本的按钮样式，但缺少高级自定义选项。
- **竞品 B**：交互效果较为丰富，但在移动端的适配性不佳。
- **竞品 C**：自定义程度高，但学习成本较高，不利于快速开发。

## 市场趋势分析

- 目前市场上对于 UI 组件的需求趋向于个性化和模块化，用户希望组件能够快速集成并易于定制。
- 响应式设计和移动端优先的设计理念越来越受到重视。

---

# 功能点设计

## 功能描述

- 按钮组件应支持多种样式，包括基础样式、朴素样式、圆角和圆形按钮。
- 应提供图标支持，允许用户根据需要添加图标以增强按钮的可读性和交互性。
- 支持按钮组合，允许用户将多个按钮组合使用，形成按钮组。

## API 设计

- `type`: 按钮类型，包括 'primary', 'success', 'warning', 'danger', 'info'。
- `plain`: 是否为朴素按钮。
- `round`: 是否为圆角按钮。
- `circle`: 是否为圆形按钮。
- `disabled`: 是否禁用按钮。
- `icon`: 按钮图标。
- `size`: 按钮尺寸，包括 'large', 'default', 'small'。
- `loading`: 是否显示加载状态。
- `loading-icon`: 自定义加载图标。

## 交互关系

- 用户可以通过设置不同的属性来改变按钮的外观和行为。
- 按钮点击事件应支持自定义回调函数，以便在用户点击时执行特定的操作。
- 加载状态应提供自定义图标支持，以适应不同的加载动画需求。

## 用户操作流程

1. 用户选择按钮样式和类型。
2. 用户根据需要添加图标和设置尺寸。
3. 用户配置按钮的交互行为，如禁用状态和加载状态。
4. 用户通过点击按钮触发相应的事件处理函数。

## 异常处理

- 当按钮处于禁用状态时，应阻止任何点击事件的触发。
- 加载状态应有明确的反馈机制，告知用户当前的操作正在进行中。
- 对于自定义图标和样式，应提供详细的文档和示例，以帮助用户正确使用 API。

import { describe, it, expect, mount } from 'vitest';
import Button from '../path/to/ButtonComponent'; // 假设按钮组件的路径

describe('Button Component', () => {

// 测试按钮的基础样式
it('should render default button', () => {
const wrapper = mount(<Button />);
expect(wrapper.text()).toContain('Default');
});

// 测试按钮的类型样式
it('should render button with different types', () => {
const types = ['primary', 'success', 'warning', 'danger', 'info'];
types.forEach(type => {
const wrapper = mount(<Button type={type} />);
expect(wrapper.text()).toContain(type);
});
});

// 测试朴素按钮样式
it('should render plain button', () => {
const wrapper = mount(<Button plain />);
expect(wrapper.classes()).toContain('plain-class'); // 假设朴素按钮有特定的类名
});

// 测试圆角和圆形按钮样式
it('should render round and circle buttons', () => {
const wrapperRound = mount(<Button round />);
expect(wrapperRound.classes()).toContain('round-class'); // 假设圆角按钮有特定的类名

    const wrapperCircle = mount(<Button circle />);
    expect(wrapperCircle.classes()).toContain('circle-class'); // 假设圆形按钮有特定的类名

});

// 测试按钮的禁用状态
it('should render disabled button', () => {
const wrapper = mount(<Button disabled />);
expect(wrapper.element).toBeDisabled();
});

// 测试按钮的图标支持
it('should render button with icon', () => {
const icons = ['search', 'edit', 'check', 'star', 'trash'];
icons.forEach(icon => {
const wrapper = mount(<Button icon={icon} />);
expect(wrapper.find(`i.${icon}`).exists()).toBe(true); // 假设图标使用特定的类名
});
});

// 测试按钮的尺寸
it('should render button with different sizes', () => {
const sizes = ['large', 'small'];
sizes.forEach(size => {
const wrapper = mount(<Button size={size} />);
expect(wrapper.classes()).toContain(size); // 假设尺寸使用特定的类名
});
});

// 测试按钮的加载状态
it('should render button with loading state', () => {
const wrapper = mount(<Button loading />);
expect(wrapper.find('.loading-class').exists()).toBe(true); // 假设加载状态有特定的类名
});

// 测试按钮的点击事件
it('should trigger click event', async () => {
const handleClick = vi.fn();
const wrapper = mount(<Button onClick={handleClick} />);
await wrapper.trigger('click');
expect(handleClick).toHaveBeenCalledOnce();
});

// 测试按钮的自定义加载图标
it('should render button with custom loading icon', () => {
const wrapper = mount(<Button loading loadingIcon="custom-icon" />);
expect(wrapper.find('.custom-icon-class').exists()).toBe(true); // 假设自定义图标使用特定的类名
});

// 测试按钮组合
it('should render button group', () => {
// 假设存在 ButtonGroup 组件用于组合按钮
const ButtonGroup = () => <div><Button type="primary" icon="arrow-left">Previous Page</Button><Button type="primary">Next Page</Button></div>;
const wrapper = mount(ButtonGroup());
expect(wrapper.findAll(Button).length).toBe(2);
});
});

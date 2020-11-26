# 虚拟DOM
  Vue通过建立一个虚拟DOM来追踪自己要如何改变真实DOM
  ## 概念
  return createElement('h1' ,this.title)
  createElement返回的不是一个实际的DOM元素，它所包含的信息会告诉Vue页面需要渲染什么节点，包括及其子节点的信息，这样的节点被称为“虚拟节点”，常简写为“VNode”，“虚拟DOM”是对由Vue组件树建立起来的整个VNode树的称呼
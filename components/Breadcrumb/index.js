import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link'
import React, { Component } from 'react'
const { Header, Content, Sider } = Layout;

export default class CommonBreadcrumb extends Component {
  render() {
    return (
      <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    )
  }
}

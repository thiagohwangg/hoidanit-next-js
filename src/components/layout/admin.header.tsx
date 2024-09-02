'use client'

import { theme } from "antd";
import { Header } from "antd/es/layout/layout"

const AdminHeader = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: '#ccc' }} />

    )
  }
  
  export default AdminHeader
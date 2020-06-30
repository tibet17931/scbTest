import React from 'react';
import { Layout, Col, Menu } from 'antd';
import { MailOutlined, LineHeightOutlined, HighlightOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import {
    Link
} from "react-router-dom";

const { Header } = Layout;

export default () => (
    <Header
        style={{
            zIndex: 1,
            width: '100%',
            backgroundImage: 'linear-gradient(to top, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6, #f6f6f6)',
            boxShadow: '0 2px 5px rgba(179, 179, 179, 0.5)'
        }}>
        <Col>
            <Menu style={{
                borderBottom: "none",
                background: 'transparent'
            }}
                mode="horizontal"
            >
                <Menu.Item key="Dashboard" icon={<MailOutlined />}>
                    <Link to="/scb/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="InsertIncome" icon={<LineHeightOutlined />}>
                    <Link to="/scb/InsertIncome">InsertIncome</Link>
                </Menu.Item>
                <Menu.Item key="ListDetail" icon={<HighlightOutlined />}>
                    <Link to="/scb/ListDetail">ListDetail</Link>
                </Menu.Item>
            </Menu>
        </Col>
    </Header>
)
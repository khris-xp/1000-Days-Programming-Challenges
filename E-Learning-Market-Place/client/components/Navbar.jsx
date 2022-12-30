import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import { HomeTwoTone, UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [current, setCurrent] = useState("");

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    return (
        <Menu mode='horizontal' selectedKeys={[current]}>
            <Menu.Item key="/" icon={<HomeTwoTone twoToneColor="#000" />} onClick={(e) => setCurrent(e.key)}>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/register" icon={<UserAddOutlined twoToneColor="#000" />} onClick={(e) => setCurrent(e.key)}>
                <Link href="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="/login" icon={<LoginOutlined twoToneColor="#000" />} onClick={(e) => setCurrent(e.key)}>
                <Link href="/login">Login</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;
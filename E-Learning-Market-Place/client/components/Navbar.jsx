import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import { HomeTwoTone, UserAddOutlined, LoginOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <Menu mode='horizontal'>
            <Menu.Item icon={<HomeTwoTone twoToneColor="#000" />}>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<UserAddOutlined twoToneColor="#000" />}>
                <Link href="/register">Register</Link>
            </Menu.Item>
            <Menu.Item icon={<LoginOutlined twoToneColor="#000" />}>
                <Link href="/login">Login</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;
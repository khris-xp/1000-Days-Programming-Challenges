import { React, useContext } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import { HomeTwoTone, UserAddOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Context } from "../context";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

    const [current, setCurrent] = useState("");

    const { state, dispatch } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    const logout = async () => {
        dispatch({
            type: "LOGOUT"
        })
        window.localStorage.removeItem("user");
        const { data } = await axios.get('/api/logout');
        toast.success(`${data.msg}`);
        router.push("/");
    }

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
            <Menu.Item icon={<LogoutOutlined twoToneColor="#000" />} onClick={logout} className="float-right">
                Logout
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;
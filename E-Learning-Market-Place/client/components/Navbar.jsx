import { React, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  HomeTwoTone,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { user } = state;

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast.success(`${data.msg}`);
    router.push("/");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]} className="mb-2">
      <Menu.Item
        key="/"
        icon={<HomeTwoTone twoToneColor="#000" />}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href="/">Home</Link>
      </Menu.Item>

      {user && user.role && user.role.includes("Instructor") ? (
        <Menu.Item
          key="/instructor/course/create"
          onClick={(e) => setCurrent(e.key)}
          icon={<BookOutlined twoToneColor="#000" />}
        >
          <Link href="/instructor/course/create">Create Course</Link>
        </Menu.Item>
      ) : (
        <Menu.Item
          key="/user/become-instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined twoToneColor="#000" />}
        >
          <Link href="/user/become-instructor">Become Instructor</Link>
        </Menu.Item>
      )}

      {user === null && (
        <>
          <Menu.Item
            key="/register"
            icon={<UserAddOutlined twoToneColor="#000" />}
            onClick={(e) => setCurrent(e.key)}
          >
            <Link href="/register">Register</Link>
          </Menu.Item>
          <Menu.Item
            key="/login"
            icon={<LoginOutlined twoToneColor="#000" />}
            onClick={(e) => setCurrent(e.key)}
          >
            <Link href="/login">Login</Link>
          </Menu.Item>
        </>
      )}
      {user !== null && (
        <Menu.SubMenu
          style={{ marginLeft: "auto" }}
          title={user && user.name}
          icon={<UserOutlined twoToneColor="#000" />}
        >
          <Menu.ItemGroup>
            <Menu.Item icon={<DashboardOutlined twoToneColor="#000" />}>
              <Link href="/user">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              icon={<LogoutOutlined twoToneColor="#000" />}
              onClick={logout}
            >
              Logout
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      )}

      {user && user.role && user.role.includes("Instructor") && (
        <Menu.Item
          key="/instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
          className="float-right"
        >
          <Link href="/instructor">Instructor</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;

import { useContext, useEffect } from "react";
import { Context } from "../../context/index";
import axios from "axios";
import { Spin } from "antd";

const stripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/instructor";
      });
    }
  }, [user]);

  return (
    <Spin tip="Loading" size="large">
      <div className="content p-5" />
    </Spin>
  );
};

export default stripeCallback;

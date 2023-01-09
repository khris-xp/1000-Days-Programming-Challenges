import { useContext, useEffect } from "react";
import { Context } from "../../context/index";
import axios from "axios";
import { Spin } from "antd";

const stripeCallback = () => {
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        console.log(res);
        // window.location.href("/instructor");
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

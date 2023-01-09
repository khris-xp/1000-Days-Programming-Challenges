import { React, useState, useContext } from "react";
import axios from "axios";
import { Button } from "antd";
import { Context } from "../../context";
import {
  UserSwitchOutlined,
  LoadingOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";

const becomeInstructor = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Stripe onboarding failed. Try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="jumbotron text-center bg-primary square">
        <h1>Become Instructor</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined
                className="display-1 pb-3"
                twoToneColor="#000"
              />
            </div>
            <br />
            <h2>Setup payout to publish courses on E-Learning Marketplace</h2>
            <p className="lead text-warning">
              E-Learning Marketplace partners with stripe to transfer earnings
              to your bank account
            </p>
            <Button
              className="mb-3"
              type="primary"
              block
              shape="round"
              icon={
                loading ? (
                  <LoadingOutlined twoToneColor="#000" />
                ) : (
                  <SettingOutlined twoToneColor="#000" />
                )
              }
              size="large"
              onClick={becomeInstructor}
              disabled={
                (user && user.role && user.role.includes("Instructor")) ||
                loading
              }
            >
              {loading ? "Processing" : "Payout Setup"}
            </Button>
            <p className="lead">
              You will be redirected to stripe to complete onboarding process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default becomeInstructor;

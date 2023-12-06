import { Button, Input, Checkbox } from "antd";
import { Form } from "antd";

import logo from "../assets/images/logo.jpg";

export default () => {
  return (
    <div>
      <div className={this.isLoggedIn() ? " " : " hidden"}>
        Successfully logged in...
      </div>
      <div className={"lContainer" + (this.isLoggedIn() ? " hidden" : " ")}>
        <div className="lItem">
          <div className="loginImage">
            <img
              src={logo}
              width="300"
              style={{ position: "relative" }}
              alt="login"
            />
          </div>
          <div className="loginForm">
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="footer">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            Powered by React
          </a>
        </div>
      </div>
    </div>
  );
};

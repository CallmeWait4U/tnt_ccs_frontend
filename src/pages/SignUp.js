import { Button, Checkbox, Form, Input } from 'antd'

import React from 'react'

<<<<<<< HEAD
import logo from '../assets/images/logo.jpg'

const SignUp = () => {
  return (
    <div>
      <div className={this.isLoggedIn() ? ' ' : ' hidden'}>
        Successfully logged in...
      </div>
      <div className={'lContainer' + (this.isLoggedIn() ? ' hidden' : ' ')}>
=======
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <div className={"lContainer" }>
>>>>>>> feat/customer-detail
        <div className="lItem">
          <div className="loginImage">
            <img
              src={logo}
              width="300"
              style={{ position: 'relative' }}
              alt="login"
            />
          </div>
          <div className="loginForm">
            <h2>Login</h2>
            <Form className="login-form">
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
  )
}

export default SignUp

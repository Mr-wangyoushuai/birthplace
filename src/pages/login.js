import React from 'react';
import { connect } from 'dva';
import styles from './login.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onFinish = values => {
    console.log('Success:', values);

    this.props.dispatch({
      type: 'loginModal/login',
      payload: values,
    });
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  request = () => {
    console.log('request');
  };
  render() {
    return (
      <div className={styles.login_div}>
        <div className={styles.login_title}>星图变幻莫测，探测之</div>
        <Form
          name="normal_login"
          className={styles['login-form']}
          initialValues={{ remember: true }}
          onFinish={e => this.onFinish(e)}
          onFinishFailed={e => this.onFinishFailed(e)}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={
                <UserOutlined className={styles['site-form-item-icon']} />
              }
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={
                <LockOutlined className={styles['site-form-item-icon']} />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className={styles['login-form-forgot']} href="/register">
              注册
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles['login-form-button']}
              onClick={this.request}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  // item:PropTypes.object.isRequired
};

export default connect(({ loginModel }) => ({
  loginModel,
}))(Login);

import { Card, Form, Row, Space, Typography } from 'antd'
import { Layout } from '../../components/layout'
import { CustomInput } from '../../components/custom-input'
import { PasswordInput } from '../../components/password-input'
import { CustomButton } from '../../components/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'
import { UserData, useLoginMutation } from '../../app/services/auth'

export const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation()

  const login = async (data: UserData) => {
    try {
      await loginUser(data.unwrap())
    } catch (err) {}
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Sign in" style={{ width: '30rem' }}>
          <Form onFinish={login}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <CustomButton type="primary" htmlType="submit">
              Sign in
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Don't have account? <Link to={Paths.register}>Sign up</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}

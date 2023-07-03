import { Form, Input } from 'antd'

type Props = {
  name: string
  placeholder: string
  type?: string
}

export const CustomInput = ({ name, placeholder, type = 'text' }: Props) => {
  return (
    <div>
      <Form.Item
        name={name}
        rules={[{ required: true, message: 'Required field' }]}
        shouldUpdate={true}
      >
        <Input placeholder={placeholder} type={type} size="large"></Input>
      </Form.Item>
    </div>
  )
}

import { Layout, Space, Typography } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import { CustomButton } from '../custom-button'
import styles from './index.module.css'

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <CustomButton type="ghost">
          <Typography.Title level={1}>Employees</Typography.Title>
        </CustomButton>
      </Space>
    </Layout.Header>
  )
}

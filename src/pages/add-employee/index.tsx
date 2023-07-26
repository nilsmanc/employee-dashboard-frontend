import { Row } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Employee } from '@prisma/client'

import { EmployeeForm } from '../../components/employee-form'
import { Layout } from '../../components/layout'
import { selectUser } from '../../features/auth/authSlice'
import { useAddEmployeeMutation } from '../../app/services/employees'
import { isErrorWithMessage } from '../../utils/is-error-with-message'
import { Paths } from '../../paths'

export const AddEmployee = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [error, setError] = useState('')
  const [addEmployee] = useAddEmployeeMutation()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap()

      navigate(`${Paths.status}/created`)
    } catch (err) {
      const maybeError = isErrorWithMessage(err)

      if (maybeError) {
        setError(err.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          onFinish={handleAddEmployee}
          title="Add Employee"
          btnText="Add"
          error={error}
        />
      </Row>
    </Layout>
  )
}

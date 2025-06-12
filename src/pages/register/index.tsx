import { showNotification } from '@/configs/notifications'
import useTranslation from '@/hooks/useTranslation'
import { registerClientAccount, RegisterClientAccountProps } from '@/services/domain'
import { getPasswordValidation } from '@/utils'
import { useForm } from '@mantine/form'
import { useCallback, useState } from 'react'
import RegisterView from './components/RegisterView'
import WelcomeView from './components/WelcomeView'

export type FormProps = RegisterClientAccountProps & {
  confirmPassword: string
  hasAgreedToPolicy: boolean
}

const initialValues: FormProps = {
  businessName: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  hasAgreedToPolicy: false,
}

export default function Register() {
  const t = useTranslation()
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const form = useForm<FormProps>({
    initialValues,
    validateInputOnBlur: true,
    validate: _validate(t),
  })

  const submit = useCallback(async (values: FormProps) => {
    const res = await registerClientAccount(values)
    if (!res?.success) {
      showNotification({ success: false, message: t(res?.message) })
      return
    }
    setIsSubmitSuccess(true)
  }, [])

  const handleNavigateToLogin = useCallback(() => {
    window.location.href = import.meta.env.VITE_LOGIN_URL
  }, [])

  if (isSubmitSuccess) {
    return <WelcomeView onClick={handleNavigateToLogin} />
  }

  return <RegisterView form={form} onSubmit={submit} />
}

function _validate(t: (s: string) => string) {
  return {
    businessName: (value: string) =>
      value === '' || value.trim() === '' ? t('Please enter your business name') : null,
    name: (value: string) =>
      value === '' || value.trim() === '' ? t('Please enter your name') : null,
    email: (value: string) => {
      if (value.trim() === '') {
        return t('Please enter your email')
      }
      return /^\S+@\S+$/.test(value) ? null : t('Invalid email')
    },
    password: getPasswordValidation(t),
    confirmPassword: (value: string, values: FormProps) =>
      value !== values.password ? t('The passwords did not match') : null,
  }
}

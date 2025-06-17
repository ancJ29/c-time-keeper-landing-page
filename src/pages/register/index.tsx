import { showNotification } from '@/configs/notifications'
import useTranslation from '@/hooks/useTranslation'
import { registerClientAccount, RegisterClientAccountProps } from '@/services/domain'
import { getEmailSchema, getPasswordSchema } from '@/utils'
import { useForm } from '@mantine/form'
import { zodResolver } from 'mantine-form-zod-resolver'
import { useCallback, useState } from 'react'
import z from 'zod'
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
    validate: zodResolver(schema(t)),
  })

  const submit = useCallback(
    async (values: FormProps) => {
      const res = await registerClientAccount({
        ...values,
        businessName: values.businessName.trim(),
        name: values.name.trim(),
        email: values.email.trim(),
      })
      if (!res?.success) {
        showNotification({ success: false, message: t(res?.message) })
        return
      }
      setIsSubmitSuccess(true)
    },
    [t],
  )

  const handleNavigateToLogin = useCallback(() => {
    window.location.href = import.meta.env.VITE_LOGIN_URL
  }, [])

  if (isSubmitSuccess) {
    return <WelcomeView onClick={handleNavigateToLogin} />
  }

  return <RegisterView form={form} onSubmit={submit} />
}

export const schema = (t: (key: string) => string) =>
  z
    .object({
      businessName: z.string().trim().min(1, t('Please enter your business name')),
      name: z.string().trim().min(1, t('Please enter your name')),
      email: getEmailSchema(t),
      password: getPasswordSchema(t),
      confirmPassword: z.string(),
      hasAgreedToPolicy: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: t('The passwords did not match'),
    })

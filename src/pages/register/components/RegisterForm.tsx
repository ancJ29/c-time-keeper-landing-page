import PasswordInput from '@/components/PasswordInput'
import PasswordStrengthInput from '@/components/PasswordStrengthInput'
import TextInput from '@/components/TextInput'
import useTranslation from '@/hooks/useTranslation'
import { Button, Stack } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { FormProps } from '..'
import TermsCheckbox from './TermsCheckbox'

export type RegisterFormProps = {
  form: UseFormReturnType<FormProps>
  onSubmit: (values: FormProps) => void
}

export default function RegisterForm({ form, onSubmit }: RegisterFormProps) {
  const t = useTranslation()

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack gap={35} w="80%">
        <TextInput
          data-autofocus
          label={t('Enter your full name')}
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label={t('Enter your business name')}
          withAsterisk
          {...form.getInputProps('businessName')}
        />
        <TextInput label={t('Enter your email')} withAsterisk {...form.getInputProps('email')} />
        <PasswordStrengthInput
          label={t('Enter your password')}
          withAsterisk
          {...form.getInputProps('password')}
        />
        <PasswordInput
          label={t('Confirm your password')}
          withAsterisk
          {...form.getInputProps('confirmPassword')}
        />
        <TermsCheckbox
          checked={form.values.hasAgreedToPolicy}
          {...form.getInputProps('hasAgreedToPolicy')}
        />
        <Button fullWidth type="submit" disabled={!form.isValid()}>
          {t('Start my free')}
        </Button>
      </Stack>
    </form>
  )
}

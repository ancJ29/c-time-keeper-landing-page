import useTranslation from '@/hooks/useTranslation'
import { Image, Stack, Text } from '@mantine/core'
import RegisterForm, { RegisterFormProps } from './RegisterForm'

export default function RegisterView({ ...props }: RegisterFormProps) {
  const t = useTranslation()

  return (
    <Stack
      bg="var(--register-surface)"
      h="100dvh"
      w="100dvw"
      align="center"
      justify="center"
      style={{ overflowY: 'auto' }}
    >
      <Stack
        bg="var(--register-background)"
        w={{ base: '100%', sm: 450 }}
        h="-webkit-fill-available"
        align="center"
        gap={20}
        py="7dvh"
      >
        <Stack align="center" gap={8} mb={20}>
          <Image src="/favicon.svg" w={250} />
          <Text fw="bolder" fz={32}>
            {t('Get Started for Free')}
          </Text>
        </Stack>
        <RegisterForm {...props} />
      </Stack>
    </Stack>
  )
}

import useTranslation from '@/hooks/useTranslation'
import { Button, Image, Stack, Text } from '@mantine/core'

type WelcomeViewProps = {
  onClick: () => void
}

export default function WelcomeView({ onClick }: WelcomeViewProps) {
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
        h="100dvh"
        w={{ base: '100%', sm: 450 }}
        align="center"
        justify="center"
        gap={25}
        px={40}
      >
        <Image src="/register/welcome.svg" w={160} />

        <Text fw="bold" fz={48} ta="center">
          {t('Welcome to TimeKeeper')}
        </Text>

        <Text c="dimmed" fz={16}>
          {t(`Let's get you set up`)}
        </Text>

        <Button fullWidth my={15} onClick={onClick}>
          {t(`Let's go`)}
        </Button>
      </Stack>
    </Stack>
  )
}

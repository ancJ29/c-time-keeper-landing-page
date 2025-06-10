import useTranslation from '@/hooks/useTranslation'
import { Anchor, Checkbox, CheckboxProps, Text } from '@mantine/core'

export default function TermsCheckbox({ ...props }: CheckboxProps) {
  const t = useTranslation()
  const fz = 14

  const label = (
    <Text fz={fz} mt={-1}>
      {t('I have read and agree to the')}{' '}
      <Anchor href="/terms-of-service" target="_blank" fz={fz}>
        {t('Terms of Service')}
      </Anchor>{' '}
      {t('and')}{' '}
      <Anchor href="/privacy-policy" target="_blank" fz={fz}>
        {t('Privacy Policy')}
      </Anchor>
    </Text>
  )

  return <Checkbox label={label} mt={10} {...props} />
}

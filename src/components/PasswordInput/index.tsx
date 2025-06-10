import { PasswordInput as MantinePasswordInput, PasswordInputProps } from '@mantine/core'
import { useState } from 'react'
import classes from '../TextInput/TextInput.module.scss'

export default function PasswordInput({ ...props }: PasswordInputProps) {
  const [focused, setFocused] = useState(false)
  const floating =
    typeof props.value === 'string' && props.value.trim().length !== 0 ? true : focused || undefined

  return (
    <MantinePasswordInput
      {...props}
      label={props.label}
      classNames={classes}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
    />
  )
}

export const passwordRequirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
]

export function getPasswordStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1

  passwordRequirements.forEach((req) => {
    if (!req.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (passwordRequirements.length + 1)) * multiplier, 10)
}

export function getPasswordValidation(t: (key: string) => string) {
  return (value: string) => {
    if (!value || value.trim() === '') {
      return t('Please enter your password')
    }

    if (value.length < 6) {
      return t('Password must be at least 6 characters long')
    }

    for (const req of passwordRequirements) {
      if (!req.re.test(value)) {
        return t(`Password is too weak`)
      }
    }

    return null
  }
}

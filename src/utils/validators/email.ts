import z from 'zod'

export const getEmailSchema = (t: (key: string) => string) =>
  z.string().superRefine((val, ctx) => {
    const trimmed = val.trim()

    if (trimmed === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('Please enter your email'),
      })
      return
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(trimmed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('Invalid email'),
      })
    }
  })

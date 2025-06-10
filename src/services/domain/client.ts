import { booleanSchema, optionalStringSchema, stringSchema } from '@/types'
import { z } from 'zod'
import callApi from '../api'

const registerClientAccountSchema = z.object({
  businessName: stringSchema,
  name: stringSchema,
  email: stringSchema,
  password: stringSchema,
})

export type RegisterClientAccountProps = z.infer<typeof registerClientAccountSchema>

const registerClientAccountResponseSchema = z.object({
  success: booleanSchema,
  message: optionalStringSchema,
})

export async function registerClientAccount(payload: RegisterClientAccountProps) {
  return await callApi({
    action: 'REGISTER_CLIENT_ACCOUNT',
    payload,
    schemaRequest: registerClientAccountSchema,
    schemaResponse: registerClientAccountResponseSchema,
  })
}

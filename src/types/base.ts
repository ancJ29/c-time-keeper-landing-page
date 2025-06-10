import { z } from 'zod'

export const stringSchema = z.string()
export const optionalStringSchema = stringSchema.optional()
export const booleanSchema = z.boolean()

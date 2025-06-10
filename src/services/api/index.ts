import { GenericObject } from '@/types'
import { ZodSchema } from 'zod'
import logger from '../logger'
import request from '../request'

type CallApiProps<T, R> = {
  action: string
  payload: GenericObject
  schemaRequest: ZodSchema<T>
  schemaResponse: ZodSchema<R>
}

export default async function callApi<T, R>({
  action,
  payload,
  schemaRequest,
  schemaResponse,
}: CallApiProps<T, R>): Promise<R | undefined> {
  const parsedRequest = schemaRequest.safeParse(payload)
  if (!parsedRequest.success) {
    logger.error(`[invalid-request]: ${parsedRequest.error}`)
    return undefined
  }

  const res = await request({ data: { action, payload } })

  const parsedResponse = schemaResponse.safeParse(res?.data)
  if (parsedResponse.success) {
    return parsedResponse.data
  }
  logger.error(`[invalid-response]: ${parsedResponse.error}`)
  return undefined
}

import { IS_DEV } from '@/configs/constant'
import { GenericObject } from '@/types'
import axios from 'axios'
import logger from '../logger'
import loadingStore from './store/loading'

type RequestProps = {
  data: GenericObject
}

export default async function request({ data }: RequestProps) {
  loadingStore.startLoading()

  const baseUrl = import.meta.env.VITE_BASE_URL

  try {
    const res = await axios.request({
      method: 'POST',
      url: `${baseUrl}${IS_DEV ? `?action=${data.action}` : ''}`,
      data,
    })
    return res
  } catch (error) {
    logger.error('[api-error]', error)
  } finally {
    loadingStore.stopLoading()
  }
}

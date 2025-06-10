import { NotificationData, notifications } from '@mantine/notifications'

interface NotificationProps extends Omit<NotificationData, 'message'> {
  success?: boolean
  message?: string
}

export function showNotification({ success, message, ...props }: NotificationProps) {
  notifications.show({
    ...props,
    withBorder: true,
    autoClose: 2000,
    message,
    color: _color(success),
  })
}

function _color(success?: boolean): string {
  if (success === true) {
    return 'var(--success)'
  }
  if (success === false) {
    return 'var(--error)'
  }
  return 'primary.5'
}

import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitaçao de amizade!'),
    recipientId: 'yyy',
    ...override,
  });
}

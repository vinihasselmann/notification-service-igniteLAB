import { makeNotification } from '@test/factories/notificationFactory';
import { InMemoryNotificationsRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { CountRecipientNotifications } from './countRecipientNotifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'xxx' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'xxx' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'yyy' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'xxx',
    });

    expect(count).toEqual(2);
  });
});

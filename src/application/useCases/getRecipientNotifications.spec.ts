import { makeNotification } from '@test/factories/notificationFactory';
import { InMemoryNotificationsRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { GetRecipientNotifications } from './getRecipientNotifications';

describe('Get recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'xxx',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'xxx' }),
        expect.objectContaining({ recipientId: 'xxx' }),
      ]),
    );
  });
});

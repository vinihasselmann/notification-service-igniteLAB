import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitaçao de amizade'),
      category: 'nova categoria',
      recipientId: '01',
    });
    expect(notification).toBeTruthy();
  });
});

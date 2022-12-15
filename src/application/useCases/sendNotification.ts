import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notificationRepository';

interface SendNotificationReq {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationRes {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(req: SendNotificationReq): Promise<SendNotificationRes> {
    const { recipientId, content, category } = req;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}

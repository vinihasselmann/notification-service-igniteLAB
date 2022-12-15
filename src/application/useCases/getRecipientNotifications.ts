import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notificationRepository';

interface GetRecipientNotificationsReq {
  recipientId: string;
}

interface GetRecipientNotificationsRes {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    req: GetRecipientNotificationsReq,
  ): Promise<GetRecipientNotificationsRes> {
    const { recipientId } = req;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}

import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notificationRepository';

interface CountRecipientNotificationsReq {
  recipientId: string;
}

interface CountRecipientNotificationsRes {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    req: CountRecipientNotificationsReq,
  ): Promise<CountRecipientNotificationsRes> {
    const { recipientId } = req;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}

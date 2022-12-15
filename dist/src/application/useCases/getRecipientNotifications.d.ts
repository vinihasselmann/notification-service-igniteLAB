import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '../repositories/notificationRepository';
interface GetRecipientNotificationsReq {
    recipientId: string;
}
interface GetRecipientNotificationsRes {
    notifications: Notification[];
}
export declare class GetRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: GetRecipientNotificationsReq): Promise<GetRecipientNotificationsRes>;
}
export {};

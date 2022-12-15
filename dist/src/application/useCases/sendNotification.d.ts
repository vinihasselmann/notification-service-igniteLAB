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
export declare class SendNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: SendNotificationReq): Promise<SendNotificationRes>;
}
export {};

import { NotificationsRepository } from '../repositories/notificationRepository';
interface CountRecipientNotificationsReq {
    recipientId: string;
}
interface CountRecipientNotificationsRes {
    count: number;
}
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: CountRecipientNotificationsReq): Promise<CountRecipientNotificationsRes>;
}
export {};

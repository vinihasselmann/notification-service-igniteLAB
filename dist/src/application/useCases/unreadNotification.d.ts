import { NotificationsRepository } from '../repositories/notificationRepository';
interface UnreadNotificationReq {
    notificationId: string;
}
type UnreadNotificationRes = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: UnreadNotificationReq): Promise<UnreadNotificationRes>;
}
export {};

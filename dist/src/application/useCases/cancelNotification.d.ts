import { NotificationsRepository } from '../repositories/notificationRepository';
interface CancelNotificationReq {
    notificationId: string;
}
type CancelNotificationRes = void;
export declare class CancelNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: CancelNotificationReq): Promise<CancelNotificationRes>;
}
export {};

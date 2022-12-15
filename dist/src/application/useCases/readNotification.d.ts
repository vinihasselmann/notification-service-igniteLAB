import { NotificationsRepository } from '../repositories/notificationRepository';
interface ReadNotificationReq {
    notificationId: string;
}
type ReadNotificationRes = void;
export declare class ReadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(req: ReadNotificationReq): Promise<ReadNotificationRes>;
}
export {};

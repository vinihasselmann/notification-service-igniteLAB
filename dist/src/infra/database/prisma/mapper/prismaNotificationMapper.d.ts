import { Notification } from '@application/entities/notification';
export declare class PrismaNotificationMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date;
        createdAt: Date;
    };
}

import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notificationRepository';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(notificationId: string): Promise<Notification>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    save(notification: Notification): Promise<void>;
    create(notification: Notification): Promise<void>;
}

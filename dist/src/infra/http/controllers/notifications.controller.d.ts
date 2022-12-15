import { SendNotification } from '@application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { CancelNotification } from '@application/useCases/cancelNotification';
import { ReadNotification } from '@application/useCases/readNotification';
import { UnreadNotification } from '@application/useCases/unreadNotification';
import { CountRecipientNotifications } from '@application/useCases/countRecipientNotifications';
import { GetRecipientNotifications } from '@application/useCases/getRecipientNotifications';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotifications;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotifications: CountRecipientNotifications, getRecipientNotifications: GetRecipientNotifications);
    cancel(id: string): Promise<void>;
    countFromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}

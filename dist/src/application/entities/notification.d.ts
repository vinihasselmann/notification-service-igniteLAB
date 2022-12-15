import { Content } from './content';
import { Replace } from 'src/helpers/Replace';
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    canceledAt?: Date | null;
    readAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<NotificationProps, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    set recipientId(recipientId: string);
    get recipientId(): string;
    set content(content: Content);
    get content(): Content;
    set category(category: string);
    get category(): string;
    read(): void;
    unread(): void;
    get readAt(): Date | null | undefined;
    cancel(): void;
    get canceledAt(): Date | null | undefined;
    get createdAt(): Date;
}

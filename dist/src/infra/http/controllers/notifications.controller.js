"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const sendNotification_1 = require("../../../application/useCases/sendNotification");
const create_notification_body_1 = require("../dtos/create-notification-body");
const notificationViewModel_1 = require("../viewModels/notificationViewModel");
const cancelNotification_1 = require("../../../application/useCases/cancelNotification");
const readNotification_1 = require("../../../application/useCases/readNotification");
const unreadNotification_1 = require("../../../application/useCases/unreadNotification");
const countRecipientNotifications_1 = require("../../../application/useCases/countRecipientNotifications");
const getRecipientNotifications_1 = require("../../../application/useCases/getRecipientNotifications");
let NotificationsController = class NotificationsController {
    constructor(sendNotification, cancelNotification, readNotification, unreadNotification, countRecipientNotifications, getRecipientNotifications) {
        this.sendNotification = sendNotification;
        this.cancelNotification = cancelNotification;
        this.readNotification = readNotification;
        this.unreadNotification = unreadNotification;
        this.countRecipientNotifications = countRecipientNotifications;
        this.getRecipientNotifications = getRecipientNotifications;
    }
    async cancel(id) {
        await this.cancelNotification.execute({
            notificationId: id,
        });
    }
    async countFromRecipient(recipientId) {
        const { count } = await this.countRecipientNotifications.execute({
            recipientId,
        });
        return { count };
    }
    async getFromRecipient(recipientId) {
        const { notifications } = await this.getRecipientNotifications.execute({
            recipientId,
        });
        return {
            notifications: notifications.map(notificationViewModel_1.NotificationViewModel.toHTTP),
        };
    }
    async read(id) {
        await this.readNotification.execute({
            notificationId: id,
        });
    }
    async unread(id) {
        await this.unreadNotification.execute({
            notificationId: id,
        });
    }
    async create(body) {
        const { recipientId, content, category } = body;
        const { notification } = await this.sendNotification.execute({
            recipientId,
            content,
            category,
        });
        return {
            notification: notificationViewModel_1.NotificationViewModel.toHTTP(notification),
        };
    }
};
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Get)('count/from/:recipientId'),
    __param(0, (0, common_1.Param)('recipientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "countFromRecipient", null);
__decorate([
    (0, common_1.Get)('from/:recipientId'),
    __param(0, (0, common_1.Param)('recipientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getFromRecipient", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "read", null);
__decorate([
    (0, common_1.Patch)(':id/unread'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "unread", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_body_1.CreateNotificationBody]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "create", null);
NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [sendNotification_1.SendNotification,
        cancelNotification_1.CancelNotification,
        readNotification_1.ReadNotification,
        unreadNotification_1.UnreadNotification,
        countRecipientNotifications_1.CountRecipientNotifications,
        getRecipientNotifications_1.GetRecipientNotifications])
], NotificationsController);
exports.NotificationsController = NotificationsController;
//# sourceMappingURL=notifications.controller.js.map
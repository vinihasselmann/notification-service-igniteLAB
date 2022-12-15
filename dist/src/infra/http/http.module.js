"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const sendNotification_1 = require("../../application/useCases/sendNotification");
const database_module_1 = require("../database/database.module");
const notifications_controller_1 = require("./controllers/notifications.controller");
const cancelNotification_1 = require("../../application/useCases/cancelNotification");
const countRecipientNotifications_1 = require("../../application/useCases/countRecipientNotifications");
const getRecipientNotifications_1 = require("../../application/useCases/getRecipientNotifications");
const readNotification_1 = require("../../application/useCases/readNotification");
const unreadNotification_1 = require("../../application/useCases/unreadNotification");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [
            sendNotification_1.SendNotification,
            cancelNotification_1.CancelNotification,
            countRecipientNotifications_1.CountRecipientNotifications,
            getRecipientNotifications_1.GetRecipientNotifications,
            readNotification_1.ReadNotification,
            unreadNotification_1.UnreadNotification,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map
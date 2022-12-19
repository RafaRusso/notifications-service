import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '../entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface GetRecipienteNotificationsRequest {
  recipientId: string;
}
interface GetRecipienteNotificationsResponse {
  notifications: Notification[];
}
@Injectable()
export class GetRecipienteNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: GetRecipienteNotificationsRequest,
  ): Promise<GetRecipienteNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}

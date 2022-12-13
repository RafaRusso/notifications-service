import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  @IsNotEmpty()
  @Length(3, 5)
  content: string;
  category: string;
}

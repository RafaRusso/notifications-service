import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['prepared-halibut-13453-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cHJlcGFyZWQtaGFsaWJ1dC0xMzQ1MySpDUf4I4RYwPiroDfXxOK91iYsD92oktI',
          password:
            'zZ5feyT5Gswv_A6Yuweg4Cab1rzmOebBu84RoyE3zjHxRMUTjPa7J-SrHtJfhuXKYJeuyA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}

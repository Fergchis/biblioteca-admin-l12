import { Module } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard.js';
import { RolGuard } from '../auth/rol.guard.js';
import { KafkaAdminService } from './kafka-admin.service.js';
import { KafkaController } from './kafka.controller.js';

// E3, paso 2: el administrador de Kafka. KAFKA_BROKERS sale del .env (o del compose).
@Module({
  controllers: [KafkaController],
  providers: [KafkaAdminService, JwtGuard, RolGuard],
})
export class KafkaModule {}

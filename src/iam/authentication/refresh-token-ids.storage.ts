import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import Redis from 'ioredis';
import { InvalidateRefreshTokenError } from './errors/invalidate-refresh-token.error';

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisCLient: Redis;
  onApplicationBootstrap() {
    this.redisCLient = new Redis({ host: 'localhost', port: 6379 });
  }
  onApplicationShutdown(signal?: string) {
    this.redisCLient.quit();
  }

  async insert(userId: number, tokenId: string): Promise<void> {
    await this.redisCLient.set(this.getKey(userId), tokenId);
  }

  async validate(userId: number, tokenId: string): Promise<boolean> {
    const storedId = await this.redisCLient.get(this.getKey(userId));
    if (storedId != tokenId) {
      throw new InvalidateRefreshTokenError();
    }
    return storedId === tokenId;
  }

  async invalidate(userId: number): Promise<void> {
    await this.redisCLient.del(this.getKey(userId));
  }

  private getKey(userId: number): string {
    return `user-${userId}`;
  }
}

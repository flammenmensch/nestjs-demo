import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // AAABBC -> A3B2C
  compress(value: string): string {
    return value.replace(/(.)\1+/g, (group, char) => char + group.length);
  }
}

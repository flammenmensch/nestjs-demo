import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should compress string', async () => {
      const query = { value: 'AAABBCDDDD' };
      const result = await appController.handleCompress(query);

      expect(result).toBe('A3B2CD4');
    });
  });
});

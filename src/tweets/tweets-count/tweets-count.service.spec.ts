import { Test, TestingModule } from '@nestjs/testing';
import { TweetsCountService } from './tweets-count.service';

describe('TweetsCountService', () => {
  let service: TweetsCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsCountService],
    }).compile();

    service = module.get<TweetsCountService>(TweetsCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

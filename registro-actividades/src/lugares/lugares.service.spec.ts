import { Test, TestingModule } from '@nestjs/testing';
import { LugaresService } from './lugares.service';

describe('LugaresService', () => {
  let service: LugaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LugaresService],
    }).compile();

    service = module.get<LugaresService>(LugaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

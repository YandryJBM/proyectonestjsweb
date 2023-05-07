import { Test, TestingModule } from '@nestjs/testing';
import { LugaresController } from './lugares.controller';

describe('LugaresController', () => {
  let controller: LugaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LugaresController],
    }).compile();

    controller = module.get<LugaresController>(LugaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

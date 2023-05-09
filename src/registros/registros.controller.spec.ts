import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosController } from './registros.controller';

describe('RegistrosController', () => {
  let controller: RegistrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrosController],
    }).compile();

    controller = module.get<RegistrosController>(RegistrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

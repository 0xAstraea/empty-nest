import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeGraphController } from './knowledge-graph.controller';
import { KnowledgeGraphService } from './knowledge-graph.service';

describe('KnowledgeGraphController', () => {
  let controller: KnowledgeGraphController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeGraphController],
      providers: [KnowledgeGraphService],
    }).compile();

    controller = module.get<KnowledgeGraphController>(KnowledgeGraphController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

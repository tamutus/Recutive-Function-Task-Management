import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';

export const SkillsToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesOrderByWithRelationInputSchema;

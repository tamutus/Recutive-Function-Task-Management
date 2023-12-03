import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';

export const SkillsToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillsToTasksOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillsToTasksOrderByWithRelationInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SkillsToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillsToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTasksScalarWhereWithAggregatesInputSchema;

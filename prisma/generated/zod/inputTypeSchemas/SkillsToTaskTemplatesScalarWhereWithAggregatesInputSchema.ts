import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema;

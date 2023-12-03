import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SkillsToSkillPathsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillsToSkillPathsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToSkillPathsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToSkillPathsScalarWhereWithAggregatesInputSchema;

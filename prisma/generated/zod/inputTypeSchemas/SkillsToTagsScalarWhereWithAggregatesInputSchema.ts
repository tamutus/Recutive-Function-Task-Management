import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SkillsToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillsToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTagsScalarWhereWithAggregatesInputSchema;

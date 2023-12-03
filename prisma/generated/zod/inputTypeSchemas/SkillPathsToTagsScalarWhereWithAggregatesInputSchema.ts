import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SkillPathsToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillPathsToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillPathsToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillPathsToTagsScalarWhereWithAggregatesInputSchema;

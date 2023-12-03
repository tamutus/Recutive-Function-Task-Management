import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const SkillPathsToTagsScalarWhereInputSchema: z.ZodType<Prisma.SkillPathsToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillPathsToTagsScalarWhereInputSchema),z.lazy(() => SkillPathsToTagsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillPathsToTagsScalarWhereInputSchema;

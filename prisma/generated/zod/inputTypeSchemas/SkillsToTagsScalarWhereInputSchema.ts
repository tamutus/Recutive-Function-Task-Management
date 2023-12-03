import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const SkillsToTagsScalarWhereInputSchema: z.ZodType<Prisma.SkillsToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTagsScalarWhereInputSchema),z.lazy(() => SkillsToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTagsScalarWhereInputSchema),z.lazy(() => SkillsToTagsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTagsScalarWhereInputSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsSelectSchema } from '../inputTypeSchemas/SkillPathsToTagsSelectSchema';
import { SkillPathsToTagsIncludeSchema } from '../inputTypeSchemas/SkillPathsToTagsIncludeSchema';

export const SkillPathsToTagsArgsSchema: z.ZodType<Prisma.SkillPathsToTagsDefaultArgs> = z.object({
  select: z.lazy(() => SkillPathsToTagsSelectSchema).optional(),
  include: z.lazy(() => SkillPathsToTagsIncludeSchema).optional(),
}).strict();

export default SkillPathsToTagsArgsSchema;

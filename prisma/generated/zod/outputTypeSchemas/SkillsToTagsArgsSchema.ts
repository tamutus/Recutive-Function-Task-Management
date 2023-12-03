import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsSelectSchema } from '../inputTypeSchemas/SkillsToTagsSelectSchema';
import { SkillsToTagsIncludeSchema } from '../inputTypeSchemas/SkillsToTagsIncludeSchema';

export const SkillsToTagsArgsSchema: z.ZodType<Prisma.SkillsToTagsDefaultArgs> = z.object({
  select: z.lazy(() => SkillsToTagsSelectSchema).optional(),
  include: z.lazy(() => SkillsToTagsIncludeSchema).optional(),
}).strict();

export default SkillsToTagsArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereInputSchema'

export const SkillsToTagsDeleteManyArgsSchema: z.ZodType<Prisma.SkillsToTagsDeleteManyArgs> = z.object({
  where: SkillsToTagsWhereInputSchema.optional(),
}).strict()

export default SkillsToTagsDeleteManyArgsSchema;

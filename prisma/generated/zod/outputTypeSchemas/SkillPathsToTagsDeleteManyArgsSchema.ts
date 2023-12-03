import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereInputSchema'

export const SkillPathsToTagsDeleteManyArgsSchema: z.ZodType<Prisma.SkillPathsToTagsDeleteManyArgs> = z.object({
  where: SkillPathsToTagsWhereInputSchema.optional(),
}).strict()

export default SkillPathsToTagsDeleteManyArgsSchema;

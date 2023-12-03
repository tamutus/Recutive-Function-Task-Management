import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsCreateManyInputSchema } from '../inputTypeSchemas/SkillPathsToTagsCreateManyInputSchema'

export const SkillPathsToTagsCreateManyArgsSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManyArgs> = z.object({
  data: z.union([ SkillPathsToTagsCreateManyInputSchema,SkillPathsToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillPathsToTagsCreateManyArgsSchema;

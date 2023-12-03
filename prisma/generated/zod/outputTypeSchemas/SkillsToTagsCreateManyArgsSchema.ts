import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsCreateManyInputSchema } from '../inputTypeSchemas/SkillsToTagsCreateManyInputSchema'

export const SkillsToTagsCreateManyArgsSchema: z.ZodType<Prisma.SkillsToTagsCreateManyArgs> = z.object({
  data: z.union([ SkillsToTagsCreateManyInputSchema,SkillsToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillsToTagsCreateManyArgsSchema;

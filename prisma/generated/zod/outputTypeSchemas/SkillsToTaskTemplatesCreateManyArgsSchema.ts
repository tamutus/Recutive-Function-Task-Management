import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesCreateManyInputSchema'

export const SkillsToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ SkillsToTaskTemplatesCreateManyInputSchema,SkillsToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillsToTaskTemplatesCreateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathCreateManyInputSchema } from '../inputTypeSchemas/SkillPathCreateManyInputSchema'

export const SkillPathCreateManyArgsSchema: z.ZodType<Prisma.SkillPathCreateManyArgs> = z.object({
  data: z.union([ SkillPathCreateManyInputSchema,SkillPathCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillPathCreateManyArgsSchema;

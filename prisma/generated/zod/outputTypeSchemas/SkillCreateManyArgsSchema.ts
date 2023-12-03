import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillCreateManyInputSchema } from '../inputTypeSchemas/SkillCreateManyInputSchema'

export const SkillCreateManyArgsSchema: z.ZodType<Prisma.SkillCreateManyArgs> = z.object({
  data: z.union([ SkillCreateManyInputSchema,SkillCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillCreateManyArgsSchema;

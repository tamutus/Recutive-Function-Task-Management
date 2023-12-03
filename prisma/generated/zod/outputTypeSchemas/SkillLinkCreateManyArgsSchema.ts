import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkCreateManyInputSchema } from '../inputTypeSchemas/SkillLinkCreateManyInputSchema'

export const SkillLinkCreateManyArgsSchema: z.ZodType<Prisma.SkillLinkCreateManyArgs> = z.object({
  data: z.union([ SkillLinkCreateManyInputSchema,SkillLinkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillLinkCreateManyArgsSchema;

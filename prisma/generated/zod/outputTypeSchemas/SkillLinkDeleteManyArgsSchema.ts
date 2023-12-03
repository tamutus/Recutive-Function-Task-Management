import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkWhereInputSchema } from '../inputTypeSchemas/SkillLinkWhereInputSchema'

export const SkillLinkDeleteManyArgsSchema: z.ZodType<Prisma.SkillLinkDeleteManyArgs> = z.object({
  where: SkillLinkWhereInputSchema.optional(),
}).strict()

export default SkillLinkDeleteManyArgsSchema;

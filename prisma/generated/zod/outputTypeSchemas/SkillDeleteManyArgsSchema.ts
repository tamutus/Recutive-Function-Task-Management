import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereInputSchema } from '../inputTypeSchemas/SkillWhereInputSchema'

export const SkillDeleteManyArgsSchema: z.ZodType<Prisma.SkillDeleteManyArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
}).strict()

export default SkillDeleteManyArgsSchema;

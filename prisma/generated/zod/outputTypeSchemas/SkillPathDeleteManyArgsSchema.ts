import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathWhereInputSchema } from '../inputTypeSchemas/SkillPathWhereInputSchema'

export const SkillPathDeleteManyArgsSchema: z.ZodType<Prisma.SkillPathDeleteManyArgs> = z.object({
  where: SkillPathWhereInputSchema.optional(),
}).strict()

export default SkillPathDeleteManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillUpdateManyMutationInputSchema'
import { SkillUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillUncheckedUpdateManyInputSchema'
import { SkillWhereInputSchema } from '../inputTypeSchemas/SkillWhereInputSchema'

export const SkillUpdateManyArgsSchema: z.ZodType<Prisma.SkillUpdateManyArgs> = z.object({
  data: z.union([ SkillUpdateManyMutationInputSchema,SkillUncheckedUpdateManyInputSchema ]),
  where: SkillWhereInputSchema.optional(),
}).strict()

export default SkillUpdateManyArgsSchema;

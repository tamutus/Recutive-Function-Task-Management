import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillPathUpdateManyMutationInputSchema'
import { SkillPathUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillPathUncheckedUpdateManyInputSchema'
import { SkillPathWhereInputSchema } from '../inputTypeSchemas/SkillPathWhereInputSchema'

export const SkillPathUpdateManyArgsSchema: z.ZodType<Prisma.SkillPathUpdateManyArgs> = z.object({
  data: z.union([ SkillPathUpdateManyMutationInputSchema,SkillPathUncheckedUpdateManyInputSchema ]),
  where: SkillPathWhereInputSchema.optional(),
}).strict()

export default SkillPathUpdateManyArgsSchema;

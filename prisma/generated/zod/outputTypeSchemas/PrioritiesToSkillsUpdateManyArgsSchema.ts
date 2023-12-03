import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUpdateManyMutationInputSchema'
import { PrioritiesToSkillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUncheckedUpdateManyInputSchema'
import { PrioritiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereInputSchema'

export const PrioritiesToSkillsUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToSkillsUpdateManyMutationInputSchema,PrioritiesToSkillsUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToSkillsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToSkillsUpdateManyArgsSchema;

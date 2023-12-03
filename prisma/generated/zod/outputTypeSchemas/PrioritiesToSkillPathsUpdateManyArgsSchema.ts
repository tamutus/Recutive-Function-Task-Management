import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsUpdateManyMutationInputSchema'
import { PrioritiesToSkillPathsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsUncheckedUpdateManyInputSchema'
import { PrioritiesToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereInputSchema'

export const PrioritiesToSkillPathsUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToSkillPathsUpdateManyMutationInputSchema,PrioritiesToSkillPathsUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToSkillPathsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToSkillPathsUpdateManyArgsSchema;

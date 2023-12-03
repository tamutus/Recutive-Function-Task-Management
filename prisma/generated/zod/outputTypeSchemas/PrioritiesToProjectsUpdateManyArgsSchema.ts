import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsUpdateManyMutationInputSchema'
import { PrioritiesToProjectsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsUncheckedUpdateManyInputSchema'
import { PrioritiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereInputSchema'

export const PrioritiesToProjectsUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToProjectsUpdateManyMutationInputSchema,PrioritiesToProjectsUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToProjectsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToProjectsUpdateManyArgsSchema;

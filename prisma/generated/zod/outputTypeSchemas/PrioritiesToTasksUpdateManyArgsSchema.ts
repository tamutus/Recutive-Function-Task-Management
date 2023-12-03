import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUpdateManyMutationInputSchema'
import { PrioritiesToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUncheckedUpdateManyInputSchema'
import { PrioritiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereInputSchema'

export const PrioritiesToTasksUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToTasksUpdateManyMutationInputSchema,PrioritiesToTasksUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToTasksWhereInputSchema.optional(),
}).strict()

export default PrioritiesToTasksUpdateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToTasksUpdateManyMutationInputSchema'
import { EnergiesToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToTasksUncheckedUpdateManyInputSchema'
import { EnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereInputSchema'

export const EnergiesToTasksUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToTasksUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToTasksUpdateManyMutationInputSchema,EnergiesToTasksUncheckedUpdateManyInputSchema ]),
  where: EnergiesToTasksWhereInputSchema.optional(),
}).strict()

export default EnergiesToTasksUpdateManyArgsSchema;

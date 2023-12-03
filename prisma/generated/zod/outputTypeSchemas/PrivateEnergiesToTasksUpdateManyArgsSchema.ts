import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksUpdateManyMutationInputSchema'
import { PrivateEnergiesToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereInputSchema'

export const PrivateEnergiesToTasksUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTasksUpdateManyMutationInputSchema,PrivateEnergiesToTasksUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToTasksWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTasksUpdateManyArgsSchema;

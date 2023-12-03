import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema'
import { PrivateEnergiesToTaskWorksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereInputSchema'

export const PrivateEnergiesToTaskWorksUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema,PrivateEnergiesToTaskWorksUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToTaskWorksWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTaskWorksUpdateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksUpdateManyMutationInputSchema'
import { EnergiesToTaskWorksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksUncheckedUpdateManyInputSchema'
import { EnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereInputSchema'

export const EnergiesToTaskWorksUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToTaskWorksUpdateManyMutationInputSchema,EnergiesToTaskWorksUncheckedUpdateManyInputSchema ]),
  where: EnergiesToTaskWorksWhereInputSchema.optional(),
}).strict()

export default EnergiesToTaskWorksUpdateManyArgsSchema;

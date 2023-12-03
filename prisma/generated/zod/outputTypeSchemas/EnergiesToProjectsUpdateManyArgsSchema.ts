import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToProjectsUpdateManyMutationInputSchema'
import { EnergiesToProjectsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToProjectsUncheckedUpdateManyInputSchema'
import { EnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereInputSchema'

export const EnergiesToProjectsUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToProjectsUpdateManyMutationInputSchema,EnergiesToProjectsUncheckedUpdateManyInputSchema ]),
  where: EnergiesToProjectsWhereInputSchema.optional(),
}).strict()

export default EnergiesToProjectsUpdateManyArgsSchema;

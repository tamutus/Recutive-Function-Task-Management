import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesUpdateManyMutationInputSchema'
import { EnergiesToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesUncheckedUpdateManyInputSchema'
import { EnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereInputSchema'

export const EnergiesToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToTaskTemplatesUpdateManyMutationInputSchema,EnergiesToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: EnergiesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default EnergiesToTaskTemplatesUpdateManyArgsSchema;

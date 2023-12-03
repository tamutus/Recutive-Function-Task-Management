import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToPersonsUpdateManyMutationInputSchema'
import { EnergiesToPersonsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToPersonsUncheckedUpdateManyInputSchema'
import { EnergiesToPersonsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereInputSchema'

export const EnergiesToPersonsUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToPersonsUpdateManyMutationInputSchema,EnergiesToPersonsUncheckedUpdateManyInputSchema ]),
  where: EnergiesToPersonsWhereInputSchema.optional(),
}).strict()

export default EnergiesToPersonsUpdateManyArgsSchema;

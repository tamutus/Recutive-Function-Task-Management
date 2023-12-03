import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergyUpdateManyMutationInputSchema'
import { EnergyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergyUncheckedUpdateManyInputSchema'
import { EnergyWhereInputSchema } from '../inputTypeSchemas/EnergyWhereInputSchema'

export const EnergyUpdateManyArgsSchema: z.ZodType<Prisma.EnergyUpdateManyArgs> = z.object({
  data: z.union([ EnergyUpdateManyMutationInputSchema,EnergyUncheckedUpdateManyInputSchema ]),
  where: EnergyWhereInputSchema.optional(),
}).strict()

export default EnergyUpdateManyArgsSchema;

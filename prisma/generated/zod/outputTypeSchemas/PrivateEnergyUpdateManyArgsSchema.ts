import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergyUpdateManyMutationInputSchema'
import { PrivateEnergyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergyUncheckedUpdateManyInputSchema'
import { PrivateEnergyWhereInputSchema } from '../inputTypeSchemas/PrivateEnergyWhereInputSchema'

export const PrivateEnergyUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergyUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergyUpdateManyMutationInputSchema,PrivateEnergyUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergyWhereInputSchema.optional(),
}).strict()

export default PrivateEnergyUpdateManyArgsSchema;

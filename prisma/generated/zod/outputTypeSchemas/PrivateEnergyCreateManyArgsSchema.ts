import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergyCreateManyInputSchema'

export const PrivateEnergyCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergyCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergyCreateManyInputSchema,PrivateEnergyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergyCreateManyArgsSchema;

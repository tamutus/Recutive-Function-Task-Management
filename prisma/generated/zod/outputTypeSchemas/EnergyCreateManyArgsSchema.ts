import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyCreateManyInputSchema } from '../inputTypeSchemas/EnergyCreateManyInputSchema'

export const EnergyCreateManyArgsSchema: z.ZodType<Prisma.EnergyCreateManyArgs> = z.object({
  data: z.union([ EnergyCreateManyInputSchema,EnergyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergyCreateManyArgsSchema;

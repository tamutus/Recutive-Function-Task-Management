import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyWhereInputSchema } from '../inputTypeSchemas/EnergyWhereInputSchema'

export const EnergyDeleteManyArgsSchema: z.ZodType<Prisma.EnergyDeleteManyArgs> = z.object({
  where: EnergyWhereInputSchema.optional(),
}).strict()

export default EnergyDeleteManyArgsSchema;

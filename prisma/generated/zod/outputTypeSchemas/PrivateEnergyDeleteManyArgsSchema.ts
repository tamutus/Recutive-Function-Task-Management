import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyWhereInputSchema } from '../inputTypeSchemas/PrivateEnergyWhereInputSchema'

export const PrivateEnergyDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergyDeleteManyArgs> = z.object({
  where: PrivateEnergyWhereInputSchema.optional(),
}).strict()

export default PrivateEnergyDeleteManyArgsSchema;

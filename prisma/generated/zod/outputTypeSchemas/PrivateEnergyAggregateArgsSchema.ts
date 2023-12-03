import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyWhereInputSchema } from '../inputTypeSchemas/PrivateEnergyWhereInputSchema'
import { PrivateEnergyOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergyOrderByWithRelationInputSchema'
import { PrivateEnergyWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergyWhereUniqueInputSchema'

export const PrivateEnergyAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergyAggregateArgs> = z.object({
  where: PrivateEnergyWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergyOrderByWithRelationInputSchema.array(),PrivateEnergyOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergyAggregateArgsSchema;

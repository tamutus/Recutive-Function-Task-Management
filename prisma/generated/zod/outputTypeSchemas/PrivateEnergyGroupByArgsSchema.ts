import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyWhereInputSchema } from '../inputTypeSchemas/PrivateEnergyWhereInputSchema'
import { PrivateEnergyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergyOrderByWithAggregationInputSchema'
import { PrivateEnergyScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergyScalarFieldEnumSchema'
import { PrivateEnergyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergyScalarWhereWithAggregatesInputSchema'

export const PrivateEnergyGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergyGroupByArgs> = z.object({
  where: PrivateEnergyWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergyOrderByWithAggregationInputSchema.array(),PrivateEnergyOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergyScalarFieldEnumSchema.array(),
  having: PrivateEnergyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergyGroupByArgsSchema;

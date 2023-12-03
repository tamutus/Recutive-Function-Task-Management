import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyWhereInputSchema } from '../inputTypeSchemas/EnergyWhereInputSchema'
import { EnergyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergyOrderByWithAggregationInputSchema'
import { EnergyScalarFieldEnumSchema } from '../inputTypeSchemas/EnergyScalarFieldEnumSchema'
import { EnergyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergyScalarWhereWithAggregatesInputSchema'

export const EnergyGroupByArgsSchema: z.ZodType<Prisma.EnergyGroupByArgs> = z.object({
  where: EnergyWhereInputSchema.optional(),
  orderBy: z.union([ EnergyOrderByWithAggregationInputSchema.array(),EnergyOrderByWithAggregationInputSchema ]).optional(),
  by: EnergyScalarFieldEnumSchema.array(),
  having: EnergyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergyGroupByArgsSchema;

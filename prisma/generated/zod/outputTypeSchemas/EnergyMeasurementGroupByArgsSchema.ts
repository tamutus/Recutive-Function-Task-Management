import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementWhereInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereInputSchema'
import { EnergyMeasurementOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergyMeasurementOrderByWithAggregationInputSchema'
import { EnergyMeasurementScalarFieldEnumSchema } from '../inputTypeSchemas/EnergyMeasurementScalarFieldEnumSchema'
import { EnergyMeasurementScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergyMeasurementScalarWhereWithAggregatesInputSchema'

export const EnergyMeasurementGroupByArgsSchema: z.ZodType<Prisma.EnergyMeasurementGroupByArgs> = z.object({
  where: EnergyMeasurementWhereInputSchema.optional(),
  orderBy: z.union([ EnergyMeasurementOrderByWithAggregationInputSchema.array(),EnergyMeasurementOrderByWithAggregationInputSchema ]).optional(),
  by: EnergyMeasurementScalarFieldEnumSchema.array(),
  having: EnergyMeasurementScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergyMeasurementGroupByArgsSchema;

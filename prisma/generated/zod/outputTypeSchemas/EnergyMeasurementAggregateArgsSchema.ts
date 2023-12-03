import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementWhereInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereInputSchema'
import { EnergyMeasurementOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergyMeasurementOrderByWithRelationInputSchema'
import { EnergyMeasurementWhereUniqueInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereUniqueInputSchema'

export const EnergyMeasurementAggregateArgsSchema: z.ZodType<Prisma.EnergyMeasurementAggregateArgs> = z.object({
  where: EnergyMeasurementWhereInputSchema.optional(),
  orderBy: z.union([ EnergyMeasurementOrderByWithRelationInputSchema.array(),EnergyMeasurementOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergyMeasurementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergyMeasurementAggregateArgsSchema;

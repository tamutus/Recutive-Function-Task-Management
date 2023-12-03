import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyWhereInputSchema } from '../inputTypeSchemas/EnergyWhereInputSchema'
import { EnergyOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergyOrderByWithRelationInputSchema'
import { EnergyWhereUniqueInputSchema } from '../inputTypeSchemas/EnergyWhereUniqueInputSchema'

export const EnergyAggregateArgsSchema: z.ZodType<Prisma.EnergyAggregateArgs> = z.object({
  where: EnergyWhereInputSchema.optional(),
  orderBy: z.union([ EnergyOrderByWithRelationInputSchema.array(),EnergyOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergyAggregateArgsSchema;

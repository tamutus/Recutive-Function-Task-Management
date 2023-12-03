import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereInputSchema'
import { EnergiesToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToTasksOrderByWithAggregationInputSchema'
import { EnergiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTasksScalarFieldEnumSchema'
import { EnergiesToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToTasksScalarWhereWithAggregatesInputSchema'

export const EnergiesToTasksGroupByArgsSchema: z.ZodType<Prisma.EnergiesToTasksGroupByArgs> = z.object({
  where: EnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTasksOrderByWithAggregationInputSchema.array(),EnergiesToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToTasksScalarFieldEnumSchema.array(),
  having: EnergiesToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTasksGroupByArgsSchema;

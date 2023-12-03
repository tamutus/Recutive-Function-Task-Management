import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereInputSchema'
import { EnergiesToProjectsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToProjectsOrderByWithAggregationInputSchema'
import { EnergiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToProjectsScalarFieldEnumSchema'
import { EnergiesToProjectsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToProjectsScalarWhereWithAggregatesInputSchema'

export const EnergiesToProjectsGroupByArgsSchema: z.ZodType<Prisma.EnergiesToProjectsGroupByArgs> = z.object({
  where: EnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectsOrderByWithAggregationInputSchema.array(),EnergiesToProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToProjectsScalarFieldEnumSchema.array(),
  having: EnergiesToProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToProjectsGroupByArgsSchema;

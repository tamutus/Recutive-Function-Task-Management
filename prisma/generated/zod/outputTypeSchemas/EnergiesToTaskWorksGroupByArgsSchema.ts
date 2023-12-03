import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereInputSchema'
import { EnergiesToTaskWorksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksOrderByWithAggregationInputSchema'
import { EnergiesToTaskWorksScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTaskWorksScalarFieldEnumSchema'
import { EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema'

export const EnergiesToTaskWorksGroupByArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksGroupByArgs> = z.object({
  where: EnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskWorksOrderByWithAggregationInputSchema.array(),EnergiesToTaskWorksOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToTaskWorksScalarFieldEnumSchema.array(),
  having: EnergiesToTaskWorksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTaskWorksGroupByArgsSchema;

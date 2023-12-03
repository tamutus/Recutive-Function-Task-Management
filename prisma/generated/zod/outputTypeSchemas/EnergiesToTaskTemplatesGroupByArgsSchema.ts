import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereInputSchema'
import { EnergiesToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesOrderByWithAggregationInputSchema'
import { EnergiesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesScalarFieldEnumSchema'
import { EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const EnergiesToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesGroupByArgs> = z.object({
  where: EnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskTemplatesOrderByWithAggregationInputSchema.array(),EnergiesToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToTaskTemplatesScalarFieldEnumSchema.array(),
  having: EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTaskTemplatesGroupByArgsSchema;

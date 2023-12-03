import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereInputSchema'
import { EnergiesToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToTagsOrderByWithAggregationInputSchema'
import { EnergiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTagsScalarFieldEnumSchema'
import { EnergiesToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToTagsScalarWhereWithAggregatesInputSchema'

export const EnergiesToTagsGroupByArgsSchema: z.ZodType<Prisma.EnergiesToTagsGroupByArgs> = z.object({
  where: EnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTagsOrderByWithAggregationInputSchema.array(),EnergiesToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToTagsScalarFieldEnumSchema.array(),
  having: EnergiesToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTagsGroupByArgsSchema;

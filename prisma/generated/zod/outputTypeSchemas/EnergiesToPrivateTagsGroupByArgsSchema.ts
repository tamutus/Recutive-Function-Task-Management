import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereInputSchema'
import { EnergiesToPrivateTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsOrderByWithAggregationInputSchema'
import { EnergiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsScalarFieldEnumSchema'
import { EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema'

export const EnergiesToPrivateTagsGroupByArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsGroupByArgs> = z.object({
  where: EnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPrivateTagsOrderByWithAggregationInputSchema.array(),EnergiesToPrivateTagsOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToPrivateTagsScalarFieldEnumSchema.array(),
  having: EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToPrivateTagsGroupByArgsSchema;

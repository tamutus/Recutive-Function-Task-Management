import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereInputSchema'
import { PrivateEnergiesToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsOrderByWithAggregationInputSchema'
import { PrivateEnergiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsScalarFieldEnumSchema'
import { PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToTagsGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsGroupByArgs> = z.object({
  where: PrivateEnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTagsOrderByWithAggregationInputSchema.array(),PrivateEnergiesToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToTagsScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTagsGroupByArgsSchema;

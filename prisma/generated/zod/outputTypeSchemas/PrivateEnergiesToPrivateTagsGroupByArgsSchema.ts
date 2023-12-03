import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereInputSchema'
import { PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema'
import { PrivateEnergiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsScalarFieldEnumSchema'
import { PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToPrivateTagsGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsGroupByArgs> = z.object({
  where: PrivateEnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema.array(),PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToPrivateTagsScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereInputSchema'
import { PrioritiesToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToTagsOrderByWithAggregationInputSchema'
import { PrioritiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToTagsScalarFieldEnumSchema'
import { PrioritiesToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToTagsScalarWhereWithAggregatesInputSchema'

export const PrioritiesToTagsGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToTagsGroupByArgs> = z.object({
  where: PrioritiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTagsOrderByWithAggregationInputSchema.array(),PrioritiesToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToTagsScalarFieldEnumSchema.array(),
  having: PrioritiesToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToTagsGroupByArgsSchema;

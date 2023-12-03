import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereInputSchema'
import { PrioritiesToPrivateTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsOrderByWithAggregationInputSchema'
import { PrioritiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsScalarFieldEnumSchema'
import { PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema'

export const PrioritiesToPrivateTagsGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsGroupByArgs> = z.object({
  where: PrioritiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToPrivateTagsOrderByWithAggregationInputSchema.array(),PrioritiesToPrivateTagsOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToPrivateTagsScalarFieldEnumSchema.array(),
  having: PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToPrivateTagsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsWhereInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereInputSchema'
import { PersonsToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToTagsOrderByWithAggregationInputSchema'
import { PersonsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToTagsScalarFieldEnumSchema'
import { PersonsToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToTagsScalarWhereWithAggregatesInputSchema'

export const PersonsToTagsGroupByArgsSchema: z.ZodType<Prisma.PersonsToTagsGroupByArgs> = z.object({
  where: PersonsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTagsOrderByWithAggregationInputSchema.array(),PersonsToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToTagsScalarFieldEnumSchema.array(),
  having: PersonsToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToTagsGroupByArgsSchema;

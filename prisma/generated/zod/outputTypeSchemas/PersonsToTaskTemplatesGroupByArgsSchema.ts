import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereInputSchema'
import { PersonsToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesOrderByWithAggregationInputSchema'
import { PersonsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesScalarFieldEnumSchema'
import { PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const PersonsToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesGroupByArgs> = z.object({
  where: PersonsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTaskTemplatesOrderByWithAggregationInputSchema.array(),PersonsToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToTaskTemplatesScalarFieldEnumSchema.array(),
  having: PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToTaskTemplatesGroupByArgsSchema;

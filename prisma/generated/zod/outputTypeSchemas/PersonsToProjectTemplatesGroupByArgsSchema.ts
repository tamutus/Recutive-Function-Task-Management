import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereInputSchema'
import { PersonsToProjectTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesOrderByWithAggregationInputSchema'
import { PersonsToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesScalarFieldEnumSchema'
import { PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema'

export const PersonsToProjectTemplatesGroupByArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesGroupByArgs> = z.object({
  where: PersonsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectTemplatesOrderByWithAggregationInputSchema.array(),PersonsToProjectTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToProjectTemplatesScalarFieldEnumSchema.array(),
  having: PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToProjectTemplatesGroupByArgsSchema;

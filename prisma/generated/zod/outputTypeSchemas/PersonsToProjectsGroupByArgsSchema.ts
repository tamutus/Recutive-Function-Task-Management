import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereInputSchema'
import { PersonsToProjectsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToProjectsOrderByWithAggregationInputSchema'
import { PersonsToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToProjectsScalarFieldEnumSchema'
import { PersonsToProjectsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToProjectsScalarWhereWithAggregatesInputSchema'

export const PersonsToProjectsGroupByArgsSchema: z.ZodType<Prisma.PersonsToProjectsGroupByArgs> = z.object({
  where: PersonsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectsOrderByWithAggregationInputSchema.array(),PersonsToProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToProjectsScalarFieldEnumSchema.array(),
  having: PersonsToProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToProjectsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereInputSchema'
import { PersonsToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToProjectsOrderByWithRelationInputSchema'
import { PersonsToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereUniqueInputSchema'

export const PersonsToProjectsAggregateArgsSchema: z.ZodType<Prisma.PersonsToProjectsAggregateArgs> = z.object({
  where: PersonsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectsOrderByWithRelationInputSchema.array(),PersonsToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToProjectsAggregateArgsSchema;

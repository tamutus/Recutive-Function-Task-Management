import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereInputSchema'
import { PersonsToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesOrderByWithRelationInputSchema'
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereUniqueInputSchema'

export const PersonsToProjectTemplatesAggregateArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesAggregateArgs> = z.object({
  where: PersonsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectTemplatesOrderByWithRelationInputSchema.array(),PersonsToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToProjectTemplatesAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereInputSchema'
import { PersonsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesOrderByWithRelationInputSchema'
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereUniqueInputSchema'

export const PersonsToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesAggregateArgs> = z.object({
  where: PersonsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTaskTemplatesOrderByWithRelationInputSchema.array(),PersonsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToTaskTemplatesAggregateArgsSchema;

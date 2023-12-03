import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsWhereInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereInputSchema'
import { PersonsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToTagsOrderByWithRelationInputSchema'
import { PersonsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereUniqueInputSchema'

export const PersonsToTagsAggregateArgsSchema: z.ZodType<Prisma.PersonsToTagsAggregateArgs> = z.object({
  where: PersonsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTagsOrderByWithRelationInputSchema.array(),PersonsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToTagsAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereInputSchema'
import { PrioritiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToTagsOrderByWithRelationInputSchema'
import { PrioritiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereUniqueInputSchema'

export const PrioritiesToTagsAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToTagsAggregateArgs> = z.object({
  where: PrioritiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTagsOrderByWithRelationInputSchema.array(),PrioritiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToTagsAggregateArgsSchema;

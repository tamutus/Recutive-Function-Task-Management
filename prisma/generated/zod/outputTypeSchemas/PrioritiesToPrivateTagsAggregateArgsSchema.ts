import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereInputSchema'
import { PrioritiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsOrderByWithRelationInputSchema'
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereUniqueInputSchema'

export const PrioritiesToPrivateTagsAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsAggregateArgs> = z.object({
  where: PrioritiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToPrivateTagsOrderByWithRelationInputSchema.array(),PrioritiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToPrivateTagsAggregateArgsSchema;

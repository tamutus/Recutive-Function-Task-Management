import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereInputSchema'
import { PrioritiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsOrderByWithRelationInputSchema'
import { PrioritiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereUniqueInputSchema'

export const PrioritiesToProjectsAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsAggregateArgs> = z.object({
  where: PrioritiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToProjectsOrderByWithRelationInputSchema.array(),PrioritiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToProjectsAggregateArgsSchema;

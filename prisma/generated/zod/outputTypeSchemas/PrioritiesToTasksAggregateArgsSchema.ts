import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereInputSchema'
import { PrioritiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToTasksOrderByWithRelationInputSchema'
import { PrioritiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereUniqueInputSchema'

export const PrioritiesToTasksAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToTasksAggregateArgs> = z.object({
  where: PrioritiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTasksOrderByWithRelationInputSchema.array(),PrioritiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToTasksAggregateArgsSchema;

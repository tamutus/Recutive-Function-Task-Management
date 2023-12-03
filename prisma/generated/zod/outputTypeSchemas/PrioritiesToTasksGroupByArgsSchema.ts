import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereInputSchema'
import { PrioritiesToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToTasksOrderByWithAggregationInputSchema'
import { PrioritiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToTasksScalarFieldEnumSchema'
import { PrioritiesToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToTasksScalarWhereWithAggregatesInputSchema'

export const PrioritiesToTasksGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToTasksGroupByArgs> = z.object({
  where: PrioritiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTasksOrderByWithAggregationInputSchema.array(),PrioritiesToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToTasksScalarFieldEnumSchema.array(),
  having: PrioritiesToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToTasksGroupByArgsSchema;

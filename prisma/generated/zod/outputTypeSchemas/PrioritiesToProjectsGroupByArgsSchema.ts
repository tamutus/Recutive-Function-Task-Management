import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereInputSchema'
import { PrioritiesToProjectsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsOrderByWithAggregationInputSchema'
import { PrioritiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToProjectsScalarFieldEnumSchema'
import { PrioritiesToProjectsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsScalarWhereWithAggregatesInputSchema'

export const PrioritiesToProjectsGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsGroupByArgs> = z.object({
  where: PrioritiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToProjectsOrderByWithAggregationInputSchema.array(),PrioritiesToProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToProjectsScalarFieldEnumSchema.array(),
  having: PrioritiesToProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToProjectsGroupByArgsSchema;

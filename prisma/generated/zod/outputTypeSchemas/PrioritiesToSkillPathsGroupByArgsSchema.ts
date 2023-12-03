import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereInputSchema'
import { PrioritiesToSkillPathsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsOrderByWithAggregationInputSchema'
import { PrioritiesToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsScalarFieldEnumSchema'
import { PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema'

export const PrioritiesToSkillPathsGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsGroupByArgs> = z.object({
  where: PrioritiesToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillPathsOrderByWithAggregationInputSchema.array(),PrioritiesToSkillPathsOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToSkillPathsScalarFieldEnumSchema.array(),
  having: PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToSkillPathsGroupByArgsSchema;

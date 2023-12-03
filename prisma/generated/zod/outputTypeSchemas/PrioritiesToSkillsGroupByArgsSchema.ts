import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereInputSchema'
import { PrioritiesToSkillsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsOrderByWithAggregationInputSchema'
import { PrioritiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToSkillsScalarFieldEnumSchema'
import { PrioritiesToSkillsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsScalarWhereWithAggregatesInputSchema'

export const PrioritiesToSkillsGroupByArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsGroupByArgs> = z.object({
  where: PrioritiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillsOrderByWithAggregationInputSchema.array(),PrioritiesToSkillsOrderByWithAggregationInputSchema ]).optional(),
  by: PrioritiesToSkillsScalarFieldEnumSchema.array(),
  having: PrioritiesToSkillsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToSkillsGroupByArgsSchema;

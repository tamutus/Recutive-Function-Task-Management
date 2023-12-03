import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereInputSchema'
import { PersonsToSkillPathsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsOrderByWithAggregationInputSchema'
import { PersonsToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToSkillPathsScalarFieldEnumSchema'
import { PersonsToSkillPathsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsScalarWhereWithAggregatesInputSchema'

export const PersonsToSkillPathsGroupByArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsGroupByArgs> = z.object({
  where: PersonsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillPathsOrderByWithAggregationInputSchema.array(),PersonsToSkillPathsOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToSkillPathsScalarFieldEnumSchema.array(),
  having: PersonsToSkillPathsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToSkillPathsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereInputSchema'
import { PersonsToSkillsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonsToSkillsOrderByWithAggregationInputSchema'
import { PersonsToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToSkillsScalarFieldEnumSchema'
import { PersonsToSkillsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonsToSkillsScalarWhereWithAggregatesInputSchema'

export const PersonsToSkillsGroupByArgsSchema: z.ZodType<Prisma.PersonsToSkillsGroupByArgs> = z.object({
  where: PersonsToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillsOrderByWithAggregationInputSchema.array(),PersonsToSkillsOrderByWithAggregationInputSchema ]).optional(),
  by: PersonsToSkillsScalarFieldEnumSchema.array(),
  having: PersonsToSkillsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToSkillsGroupByArgsSchema;

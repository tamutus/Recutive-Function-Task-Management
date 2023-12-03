import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereInputSchema'
import { PersonsToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToSkillsOrderByWithRelationInputSchema'
import { PersonsToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereUniqueInputSchema'

export const PersonsToSkillsAggregateArgsSchema: z.ZodType<Prisma.PersonsToSkillsAggregateArgs> = z.object({
  where: PersonsToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillsOrderByWithRelationInputSchema.array(),PersonsToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToSkillsAggregateArgsSchema;

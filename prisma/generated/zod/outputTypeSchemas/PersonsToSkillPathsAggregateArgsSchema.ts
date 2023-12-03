import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereInputSchema'
import { PersonsToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsOrderByWithRelationInputSchema'
import { PersonsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereUniqueInputSchema'

export const PersonsToSkillPathsAggregateArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsAggregateArgs> = z.object({
  where: PersonsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillPathsOrderByWithRelationInputSchema.array(),PersonsToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PersonsToSkillPathsAggregateArgsSchema;

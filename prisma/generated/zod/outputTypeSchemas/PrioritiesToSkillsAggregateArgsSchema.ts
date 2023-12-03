import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereInputSchema'
import { PrioritiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsOrderByWithRelationInputSchema'
import { PrioritiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereUniqueInputSchema'

export const PrioritiesToSkillsAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsAggregateArgs> = z.object({
  where: PrioritiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillsOrderByWithRelationInputSchema.array(),PrioritiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToSkillsAggregateArgsSchema;

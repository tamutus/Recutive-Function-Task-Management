import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereInputSchema'
import { PrioritiesToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsOrderByWithRelationInputSchema'
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereUniqueInputSchema'

export const PrioritiesToSkillPathsAggregateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsAggregateArgs> = z.object({
  where: PrioritiesToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToSkillPathsOrderByWithRelationInputSchema.array(),PrioritiesToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrioritiesToSkillPathsAggregateArgsSchema;

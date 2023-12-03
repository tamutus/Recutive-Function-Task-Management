import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereInputSchema'
import { EnergiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToSkillsOrderByWithRelationInputSchema'
import { EnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereUniqueInputSchema'

export const EnergiesToSkillsAggregateArgsSchema: z.ZodType<Prisma.EnergiesToSkillsAggregateArgs> = z.object({
  where: EnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToSkillsOrderByWithRelationInputSchema.array(),EnergiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToSkillsAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereInputSchema'
import { EnergiesToSkillsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToSkillsOrderByWithAggregationInputSchema'
import { EnergiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToSkillsScalarFieldEnumSchema'
import { EnergiesToSkillsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToSkillsScalarWhereWithAggregatesInputSchema'

export const EnergiesToSkillsGroupByArgsSchema: z.ZodType<Prisma.EnergiesToSkillsGroupByArgs> = z.object({
  where: EnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToSkillsOrderByWithAggregationInputSchema.array(),EnergiesToSkillsOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToSkillsScalarFieldEnumSchema.array(),
  having: EnergiesToSkillsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToSkillsGroupByArgsSchema;

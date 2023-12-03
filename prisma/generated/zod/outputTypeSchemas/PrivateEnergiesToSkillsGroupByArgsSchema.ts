import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereInputSchema'
import { PrivateEnergiesToSkillsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsOrderByWithAggregationInputSchema'
import { PrivateEnergiesToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsScalarFieldEnumSchema'
import { PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToSkillsGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsGroupByArgs> = z.object({
  where: PrivateEnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToSkillsOrderByWithAggregationInputSchema.array(),PrivateEnergiesToSkillsOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToSkillsScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToSkillsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereInputSchema'
import { PrivateEnergiesToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsOrderByWithRelationInputSchema'
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereUniqueInputSchema'

export const PrivateEnergiesToSkillsAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsAggregateArgs> = z.object({
  where: PrivateEnergiesToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToSkillsOrderByWithRelationInputSchema.array(),PrivateEnergiesToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToSkillsAggregateArgsSchema;

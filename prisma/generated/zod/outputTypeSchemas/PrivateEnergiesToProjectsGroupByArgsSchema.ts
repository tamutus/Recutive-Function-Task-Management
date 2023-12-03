import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereInputSchema'
import { PrivateEnergiesToProjectsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsOrderByWithAggregationInputSchema'
import { PrivateEnergiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsScalarFieldEnumSchema'
import { PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToProjectsGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsGroupByArgs> = z.object({
  where: PrivateEnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectsOrderByWithAggregationInputSchema.array(),PrivateEnergiesToProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToProjectsScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToProjectsGroupByArgsSchema;

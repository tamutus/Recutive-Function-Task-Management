import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereInputSchema'
import { PrivateEnergiesToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksOrderByWithAggregationInputSchema'
import { PrivateEnergiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksScalarFieldEnumSchema'
import { PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToTasksGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksGroupByArgs> = z.object({
  where: PrivateEnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTasksOrderByWithAggregationInputSchema.array(),PrivateEnergiesToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToTasksScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTasksGroupByArgsSchema;

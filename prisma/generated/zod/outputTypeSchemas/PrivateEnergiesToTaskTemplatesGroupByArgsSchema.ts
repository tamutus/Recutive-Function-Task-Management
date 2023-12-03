import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereInputSchema'
import { PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema'
import { PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema'
import { PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesGroupByArgs> = z.object({
  where: PrivateEnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema.array(),PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesGroupByArgsSchema;

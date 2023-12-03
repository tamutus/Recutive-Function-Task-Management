import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereInputSchema'
import { PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema'
import { PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema'
import { PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToProjectTemplatesGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesGroupByArgs> = z.object({
  where: PrivateEnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema.array(),PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesGroupByArgsSchema;

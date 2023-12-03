import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereInputSchema'
import { EnergiesToProjectTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesOrderByWithAggregationInputSchema'
import { EnergiesToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesScalarFieldEnumSchema'
import { EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema'

export const EnergiesToProjectTemplatesGroupByArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesGroupByArgs> = z.object({
  where: EnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectTemplatesOrderByWithAggregationInputSchema.array(),EnergiesToProjectTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToProjectTemplatesScalarFieldEnumSchema.array(),
  having: EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToProjectTemplatesGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereInputSchema'
import { EnergiesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesOrderByWithRelationInputSchema'
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereUniqueInputSchema'

export const EnergiesToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesAggregateArgs> = z.object({
  where: EnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskTemplatesOrderByWithRelationInputSchema.array(),EnergiesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTaskTemplatesAggregateArgsSchema;

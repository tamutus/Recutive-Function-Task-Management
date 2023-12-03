import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereInputSchema'
import { EnergiesToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesOrderByWithRelationInputSchema'
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereUniqueInputSchema'

export const EnergiesToProjectTemplatesAggregateArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesAggregateArgs> = z.object({
  where: EnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectTemplatesOrderByWithRelationInputSchema.array(),EnergiesToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToProjectTemplatesAggregateArgsSchema;

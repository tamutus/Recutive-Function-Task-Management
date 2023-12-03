import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereInputSchema'
import { EnergiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTagsOrderByWithRelationInputSchema'
import { EnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereUniqueInputSchema'

export const EnergiesToTagsAggregateArgsSchema: z.ZodType<Prisma.EnergiesToTagsAggregateArgs> = z.object({
  where: EnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTagsOrderByWithRelationInputSchema.array(),EnergiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTagsAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereInputSchema'
import { EnergiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsOrderByWithRelationInputSchema'
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereUniqueInputSchema'

export const EnergiesToPrivateTagsAggregateArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsAggregateArgs> = z.object({
  where: EnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPrivateTagsOrderByWithRelationInputSchema.array(),EnergiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToPrivateTagsAggregateArgsSchema;

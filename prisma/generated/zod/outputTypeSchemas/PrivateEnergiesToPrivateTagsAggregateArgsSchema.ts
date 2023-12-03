import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereInputSchema'
import { PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema'
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereUniqueInputSchema'

export const PrivateEnergiesToPrivateTagsAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsAggregateArgs> = z.object({
  where: PrivateEnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema.array(),PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsAggregateArgsSchema;

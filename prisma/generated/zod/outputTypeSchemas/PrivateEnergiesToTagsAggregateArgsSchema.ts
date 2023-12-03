import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereInputSchema'
import { PrivateEnergiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsOrderByWithRelationInputSchema'
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereUniqueInputSchema'

export const PrivateEnergiesToTagsAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsAggregateArgs> = z.object({
  where: PrivateEnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTagsOrderByWithRelationInputSchema.array(),PrivateEnergiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTagsAggregateArgsSchema;

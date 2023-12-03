import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagWhereInputSchema } from '../inputTypeSchemas/PrivateTagWhereInputSchema'
import { PrivateTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagOrderByWithRelationInputSchema'
import { PrivateTagWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagWhereUniqueInputSchema'

export const PrivateTagAggregateArgsSchema: z.ZodType<Prisma.PrivateTagAggregateArgs> = z.object({
  where: PrivateTagWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagOrderByWithRelationInputSchema.array(),PrivateTagOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagAggregateArgsSchema;

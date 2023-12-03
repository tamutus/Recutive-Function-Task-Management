import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagWhereInputSchema } from '../inputTypeSchemas/PrivateTagWhereInputSchema'
import { PrivateTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateTagOrderByWithAggregationInputSchema'
import { PrivateTagScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagScalarFieldEnumSchema'
import { PrivateTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateTagScalarWhereWithAggregatesInputSchema'

export const PrivateTagGroupByArgsSchema: z.ZodType<Prisma.PrivateTagGroupByArgs> = z.object({
  where: PrivateTagWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagOrderByWithAggregationInputSchema.array(),PrivateTagOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateTagScalarFieldEnumSchema.array(),
  having: PrivateTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagGroupByArgsSchema;

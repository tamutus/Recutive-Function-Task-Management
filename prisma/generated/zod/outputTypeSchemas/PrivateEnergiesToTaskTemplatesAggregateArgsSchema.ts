import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereInputSchema'
import { PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema'
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema'

export const PrivateEnergiesToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesAggregateArgs> = z.object({
  where: PrivateEnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema.array(),PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereInputSchema'
import { PrivateEnergiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksOrderByWithRelationInputSchema'
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereUniqueInputSchema'

export const PrivateEnergiesToTasksAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksAggregateArgs> = z.object({
  where: PrivateEnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTasksOrderByWithRelationInputSchema.array(),PrivateEnergiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTasksAggregateArgsSchema;

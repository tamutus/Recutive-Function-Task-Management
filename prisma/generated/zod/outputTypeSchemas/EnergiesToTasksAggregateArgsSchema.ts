import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereInputSchema'
import { EnergiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTasksOrderByWithRelationInputSchema'
import { EnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereUniqueInputSchema'

export const EnergiesToTasksAggregateArgsSchema: z.ZodType<Prisma.EnergiesToTasksAggregateArgs> = z.object({
  where: EnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTasksOrderByWithRelationInputSchema.array(),EnergiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTasksAggregateArgsSchema;

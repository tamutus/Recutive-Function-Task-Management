import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereInputSchema'
import { EnergiesToTaskWorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksOrderByWithRelationInputSchema'
import { EnergiesToTaskWorksWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereUniqueInputSchema'

export const EnergiesToTaskWorksAggregateArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksAggregateArgs> = z.object({
  where: EnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskWorksOrderByWithRelationInputSchema.array(),EnergiesToTaskWorksOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTaskWorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToTaskWorksAggregateArgsSchema;

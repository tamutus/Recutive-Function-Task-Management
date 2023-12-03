import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereInputSchema'
import { PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema'
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereUniqueInputSchema'

export const PrivateEnergiesToTaskWorksAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksAggregateArgs> = z.object({
  where: PrivateEnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema.array(),PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTaskWorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTaskWorksAggregateArgsSchema;

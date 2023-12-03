import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereInputSchema'
import { PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema'
import { PrivateEnergiesToTaskWorksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksScalarFieldEnumSchema'
import { PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema'

export const PrivateEnergiesToTaskWorksGroupByArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksGroupByArgs> = z.object({
  where: PrivateEnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema.array(),PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateEnergiesToTaskWorksScalarFieldEnumSchema.array(),
  having: PrivateEnergiesToTaskWorksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToTaskWorksGroupByArgsSchema;

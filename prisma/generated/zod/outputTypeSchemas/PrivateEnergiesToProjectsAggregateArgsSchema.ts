import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereInputSchema'
import { PrivateEnergiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsOrderByWithRelationInputSchema'
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereUniqueInputSchema'

export const PrivateEnergiesToProjectsAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsAggregateArgs> = z.object({
  where: PrivateEnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectsOrderByWithRelationInputSchema.array(),PrivateEnergiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToProjectsAggregateArgsSchema;

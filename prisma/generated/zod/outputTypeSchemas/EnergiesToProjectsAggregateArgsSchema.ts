import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereInputSchema'
import { EnergiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToProjectsOrderByWithRelationInputSchema'
import { EnergiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereUniqueInputSchema'

export const EnergiesToProjectsAggregateArgsSchema: z.ZodType<Prisma.EnergiesToProjectsAggregateArgs> = z.object({
  where: EnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectsOrderByWithRelationInputSchema.array(),EnergiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToProjectsAggregateArgsSchema;

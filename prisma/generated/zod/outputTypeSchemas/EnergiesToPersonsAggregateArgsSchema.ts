import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereInputSchema'
import { EnergiesToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToPersonsOrderByWithRelationInputSchema'
import { EnergiesToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereUniqueInputSchema'

export const EnergiesToPersonsAggregateArgsSchema: z.ZodType<Prisma.EnergiesToPersonsAggregateArgs> = z.object({
  where: EnergiesToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPersonsOrderByWithRelationInputSchema.array(),EnergiesToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToPersonsAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereInputSchema'
import { EnergiesToPersonsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EnergiesToPersonsOrderByWithAggregationInputSchema'
import { EnergiesToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToPersonsScalarFieldEnumSchema'
import { EnergiesToPersonsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EnergiesToPersonsScalarWhereWithAggregatesInputSchema'

export const EnergiesToPersonsGroupByArgsSchema: z.ZodType<Prisma.EnergiesToPersonsGroupByArgs> = z.object({
  where: EnergiesToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPersonsOrderByWithAggregationInputSchema.array(),EnergiesToPersonsOrderByWithAggregationInputSchema ]).optional(),
  by: EnergiesToPersonsScalarFieldEnumSchema.array(),
  having: EnergiesToPersonsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default EnergiesToPersonsGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsIncludeSchema } from '../inputTypeSchemas/EnergiesToPersonsIncludeSchema'
import { EnergiesToPersonsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereInputSchema'
import { EnergiesToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToPersonsOrderByWithRelationInputSchema'
import { EnergiesToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereUniqueInputSchema'
import { EnergiesToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToPersonsScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { EnergyMeasurementFindManyArgsSchema } from "../outputTypeSchemas/EnergyMeasurementFindManyArgsSchema"
import { EnergiesToPersonsCountOutputTypeArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToPersonsSelectSchema: z.ZodType<Prisma.EnergiesToPersonsSelect> = z.object({
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  measurements: z.union([z.boolean(),z.lazy(() => EnergyMeasurementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EnergiesToPersonsFindFirstArgsSchema: z.ZodType<Prisma.EnergiesToPersonsFindFirstArgs> = z.object({
  select: EnergiesToPersonsSelectSchema.optional(),
  include: EnergiesToPersonsIncludeSchema.optional(),
  where: EnergiesToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPersonsOrderByWithRelationInputSchema.array(),EnergiesToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToPersonsScalarFieldEnumSchema,EnergiesToPersonsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToPersonsFindFirstArgsSchema;

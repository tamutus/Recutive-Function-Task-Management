import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementIncludeSchema } from '../inputTypeSchemas/EnergyMeasurementIncludeSchema'
import { EnergyMeasurementWhereInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereInputSchema'
import { EnergyMeasurementOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergyMeasurementOrderByWithRelationInputSchema'
import { EnergyMeasurementWhereUniqueInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereUniqueInputSchema'
import { EnergyMeasurementScalarFieldEnumSchema } from '../inputTypeSchemas/EnergyMeasurementScalarFieldEnumSchema'
import { EnergiesToPersonsArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergyMeasurementSelectSchema: z.ZodType<Prisma.EnergyMeasurementSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  measurement: z.boolean().optional(),
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  experience: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsArgsSchema)]).optional(),
}).strict()

export const EnergyMeasurementFindManyArgsSchema: z.ZodType<Prisma.EnergyMeasurementFindManyArgs> = z.object({
  select: EnergyMeasurementSelectSchema.optional(),
  include: EnergyMeasurementIncludeSchema.optional(),
  where: EnergyMeasurementWhereInputSchema.optional(),
  orderBy: z.union([ EnergyMeasurementOrderByWithRelationInputSchema.array(),EnergyMeasurementOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergyMeasurementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergyMeasurementScalarFieldEnumSchema,EnergyMeasurementScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergyMeasurementFindManyArgsSchema;

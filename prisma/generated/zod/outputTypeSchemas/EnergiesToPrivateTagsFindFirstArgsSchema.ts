import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsIncludeSchema'
import { EnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereInputSchema'
import { EnergiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsOrderByWithRelationInputSchema'
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereUniqueInputSchema'
import { EnergiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsScalarFieldEnumSchema'
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToPrivateTagsSelectSchema: z.ZodType<Prisma.EnergiesToPrivateTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  notes: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export const EnergiesToPrivateTagsFindFirstArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsFindFirstArgs> = z.object({
  select: EnergiesToPrivateTagsSelectSchema.optional(),
  include: EnergiesToPrivateTagsIncludeSchema.optional(),
  where: EnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToPrivateTagsOrderByWithRelationInputSchema.array(),EnergiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToPrivateTagsScalarFieldEnumSchema,EnergiesToPrivateTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToPrivateTagsFindFirstArgsSchema;

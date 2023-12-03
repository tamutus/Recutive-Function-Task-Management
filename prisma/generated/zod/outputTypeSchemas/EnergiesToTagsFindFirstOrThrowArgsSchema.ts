import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToTagsIncludeSchema'
import { EnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereInputSchema'
import { EnergiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTagsOrderByWithRelationInputSchema'
import { EnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereUniqueInputSchema'
import { EnergiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTagsScalarFieldEnumSchema'
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToTagsSelectSchema: z.ZodType<Prisma.EnergiesToTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  taggerId: z.boolean().optional(),
  info: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const EnergiesToTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EnergiesToTagsFindFirstOrThrowArgs> = z.object({
  select: EnergiesToTagsSelectSchema.optional(),
  include: EnergiesToTagsIncludeSchema.optional(),
  where: EnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTagsOrderByWithRelationInputSchema.array(),EnergiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToTagsScalarFieldEnumSchema,EnergiesToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToTagsFindFirstOrThrowArgsSchema;

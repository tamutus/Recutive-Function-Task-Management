import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToTagsIncludeSchema'
import { EnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereUniqueInputSchema'
import { EnergiesToTagsCreateInputSchema } from '../inputTypeSchemas/EnergiesToTagsCreateInputSchema'
import { EnergiesToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToTagsUncheckedCreateInputSchema'
import { EnergiesToTagsUpdateInputSchema } from '../inputTypeSchemas/EnergiesToTagsUpdateInputSchema'
import { EnergiesToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/EnergiesToTagsUncheckedUpdateInputSchema'
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

export const EnergiesToTagsUpsertArgsSchema: z.ZodType<Prisma.EnergiesToTagsUpsertArgs> = z.object({
  select: EnergiesToTagsSelectSchema.optional(),
  include: EnergiesToTagsIncludeSchema.optional(),
  where: EnergiesToTagsWhereUniqueInputSchema,
  create: z.union([ EnergiesToTagsCreateInputSchema,EnergiesToTagsUncheckedCreateInputSchema ]),
  update: z.union([ EnergiesToTagsUpdateInputSchema,EnergiesToTagsUncheckedUpdateInputSchema ]),
}).strict()

export default EnergiesToTagsUpsertArgsSchema;

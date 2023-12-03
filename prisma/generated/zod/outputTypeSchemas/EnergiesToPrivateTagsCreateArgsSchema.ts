import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsIncludeSchema'
import { EnergiesToPrivateTagsCreateInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsCreateInputSchema'
import { EnergiesToPrivateTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsUncheckedCreateInputSchema'
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

export const EnergiesToPrivateTagsCreateArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateArgs> = z.object({
  select: EnergiesToPrivateTagsSelectSchema.optional(),
  include: EnergiesToPrivateTagsIncludeSchema.optional(),
  data: z.union([ EnergiesToPrivateTagsCreateInputSchema,EnergiesToPrivateTagsUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToPrivateTagsCreateArgsSchema;

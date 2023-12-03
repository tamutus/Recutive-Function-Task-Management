import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsIncludeSchema'
import { PrivateEnergiesToTagsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsCreateInputSchema'
import { PrivateEnergiesToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUncheckedCreateInputSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToTagsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToTagsCreateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateArgs> = z.object({
  select: PrivateEnergiesToTagsSelectSchema.optional(),
  include: PrivateEnergiesToTagsIncludeSchema.optional(),
  data: z.union([ PrivateEnergiesToTagsCreateInputSchema,PrivateEnergiesToTagsUncheckedCreateInputSchema ]),
}).strict()

export default PrivateEnergiesToTagsCreateArgsSchema;
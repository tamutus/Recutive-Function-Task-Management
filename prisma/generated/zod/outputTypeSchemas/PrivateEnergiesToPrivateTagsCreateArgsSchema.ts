import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsIncludeSchema'
import { PrivateEnergiesToPrivateTagsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsCreateInputSchema'
import { PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToPrivateTagsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToPrivateTagsCreateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateArgs> = z.object({
  select: PrivateEnergiesToPrivateTagsSelectSchema.optional(),
  include: PrivateEnergiesToPrivateTagsIncludeSchema.optional(),
  data: z.union([ PrivateEnergiesToPrivateTagsCreateInputSchema,PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema ]),
}).strict()

export default PrivateEnergiesToPrivateTagsCreateArgsSchema;

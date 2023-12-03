import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsIncludeSchema'
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereUniqueInputSchema'
import { PrivateEnergiesToPrivateTagsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsCreateInputSchema'
import { PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema'
import { PrivateEnergiesToPrivateTagsUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUpdateInputSchema'
import { PrivateEnergiesToPrivateTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUncheckedUpdateInputSchema'
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

export const PrivateEnergiesToPrivateTagsUpsertArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpsertArgs> = z.object({
  select: PrivateEnergiesToPrivateTagsSelectSchema.optional(),
  include: PrivateEnergiesToPrivateTagsIncludeSchema.optional(),
  where: PrivateEnergiesToPrivateTagsWhereUniqueInputSchema,
  create: z.union([ PrivateEnergiesToPrivateTagsCreateInputSchema,PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema ]),
  update: z.union([ PrivateEnergiesToPrivateTagsUpdateInputSchema,PrivateEnergiesToPrivateTagsUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateEnergiesToPrivateTagsUpsertArgsSchema;

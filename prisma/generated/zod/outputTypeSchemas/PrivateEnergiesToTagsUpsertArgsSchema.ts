import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsIncludeSchema'
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereUniqueInputSchema'
import { PrivateEnergiesToTagsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsCreateInputSchema'
import { PrivateEnergiesToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUncheckedCreateInputSchema'
import { PrivateEnergiesToTagsUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUpdateInputSchema'
import { PrivateEnergiesToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUncheckedUpdateInputSchema'
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

export const PrivateEnergiesToTagsUpsertArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpsertArgs> = z.object({
  select: PrivateEnergiesToTagsSelectSchema.optional(),
  include: PrivateEnergiesToTagsIncludeSchema.optional(),
  where: PrivateEnergiesToTagsWhereUniqueInputSchema,
  create: z.union([ PrivateEnergiesToTagsCreateInputSchema,PrivateEnergiesToTagsUncheckedCreateInputSchema ]),
  update: z.union([ PrivateEnergiesToTagsUpdateInputSchema,PrivateEnergiesToTagsUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateEnergiesToTagsUpsertArgsSchema;

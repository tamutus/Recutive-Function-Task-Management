import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsIncludeSchema'
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereUniqueInputSchema'
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

export const PrivateEnergiesToPrivateTagsFindUniqueArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsFindUniqueArgs> = z.object({
  select: PrivateEnergiesToPrivateTagsSelectSchema.optional(),
  include: PrivateEnergiesToPrivateTagsIncludeSchema.optional(),
  where: PrivateEnergiesToPrivateTagsWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToPrivateTagsFindUniqueArgsSchema;

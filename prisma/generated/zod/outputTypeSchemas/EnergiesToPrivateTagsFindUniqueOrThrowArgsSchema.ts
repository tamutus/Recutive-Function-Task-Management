import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsIncludeSchema'
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereUniqueInputSchema'
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

export const EnergiesToPrivateTagsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsFindUniqueOrThrowArgs> = z.object({
  select: EnergiesToPrivateTagsSelectSchema.optional(),
  include: EnergiesToPrivateTagsIncludeSchema.optional(),
  where: EnergiesToPrivateTagsWhereUniqueInputSchema,
}).strict()

export default EnergiesToPrivateTagsFindUniqueOrThrowArgsSchema;

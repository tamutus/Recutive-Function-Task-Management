import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"

export const EnergiesToPrivateTagsSelectSchema: z.ZodType<Prisma.EnergiesToPrivateTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  notes: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export default EnergiesToPrivateTagsSelectSchema;
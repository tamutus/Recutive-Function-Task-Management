import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"

export const EnergiesToPrivateTagsIncludeSchema: z.ZodType<Prisma.EnergiesToPrivateTagsInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export default EnergiesToPrivateTagsIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"

export const PrivateEnergiesToPrivateTagsIncludeSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const PrivateEnergiesToTagsIncludeSchema: z.ZodType<Prisma.PrivateEnergiesToTagsInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToTagsIncludeSchema;

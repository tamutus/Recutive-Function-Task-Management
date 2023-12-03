import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"

export const PrioritiesToPrivateTagsIncludeSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsInclude> = z.object({
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export default PrioritiesToPrivateTagsIncludeSchema;

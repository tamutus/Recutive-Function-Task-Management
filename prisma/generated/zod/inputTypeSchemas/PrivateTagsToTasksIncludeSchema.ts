import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const PrivateTagsToTasksIncludeSchema: z.ZodType<Prisma.PrivateTagsToTasksInclude> = z.object({
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default PrivateTagsToTasksIncludeSchema;

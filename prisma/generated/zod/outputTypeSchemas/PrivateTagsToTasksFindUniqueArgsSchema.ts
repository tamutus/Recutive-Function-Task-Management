import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema'
import { PrivateTagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereUniqueInputSchema'
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToTasksSelectSchema: z.ZodType<Prisma.PrivateTagsToTasksSelect> = z.object({
  tagId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToTasksFindUniqueArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksFindUniqueArgs> = z.object({
  select: PrivateTagsToTasksSelectSchema.optional(),
  include: PrivateTagsToTasksIncludeSchema.optional(),
  where: PrivateTagsToTasksWhereUniqueInputSchema,
}).strict()

export default PrivateTagsToTasksFindUniqueArgsSchema;

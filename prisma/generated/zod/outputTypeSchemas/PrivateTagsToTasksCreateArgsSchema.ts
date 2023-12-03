import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema'
import { PrivateTagsToTasksCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksCreateInputSchema'
import { PrivateTagsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUncheckedCreateInputSchema'
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

export const PrivateTagsToTasksCreateArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateArgs> = z.object({
  select: PrivateTagsToTasksSelectSchema.optional(),
  include: PrivateTagsToTasksIncludeSchema.optional(),
  data: z.union([ PrivateTagsToTasksCreateInputSchema,PrivateTagsToTasksUncheckedCreateInputSchema ]),
}).strict()

export default PrivateTagsToTasksCreateArgsSchema;

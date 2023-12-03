import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema'
import { PrivateTagsToTasksUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUpdateInputSchema'
import { PrivateTagsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUncheckedUpdateInputSchema'
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

export const PrivateTagsToTasksUpdateArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateArgs> = z.object({
  select: PrivateTagsToTasksSelectSchema.optional(),
  include: PrivateTagsToTasksIncludeSchema.optional(),
  data: z.union([ PrivateTagsToTasksUpdateInputSchema,PrivateTagsToTasksUncheckedUpdateInputSchema ]),
  where: PrivateTagsToTasksWhereUniqueInputSchema,
}).strict()

export default PrivateTagsToTasksUpdateArgsSchema;

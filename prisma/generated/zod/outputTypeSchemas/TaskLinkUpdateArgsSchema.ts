import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkIncludeSchema } from '../inputTypeSchemas/TaskLinkIncludeSchema'
import { TaskLinkUpdateInputSchema } from '../inputTypeSchemas/TaskLinkUpdateInputSchema'
import { TaskLinkUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskLinkUncheckedUpdateInputSchema'
import { TaskLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskLinkWhereUniqueInputSchema'
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskLinkSelectSchema: z.ZodType<Prisma.TaskLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const TaskLinkUpdateArgsSchema: z.ZodType<Prisma.TaskLinkUpdateArgs> = z.object({
  select: TaskLinkSelectSchema.optional(),
  include: TaskLinkIncludeSchema.optional(),
  data: z.union([ TaskLinkUpdateInputSchema,TaskLinkUncheckedUpdateInputSchema ]),
  where: TaskLinkWhereUniqueInputSchema,
}).strict()

export default TaskLinkUpdateArgsSchema;

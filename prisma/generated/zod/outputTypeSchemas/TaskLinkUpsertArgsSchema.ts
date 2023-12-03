import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkIncludeSchema } from '../inputTypeSchemas/TaskLinkIncludeSchema'
import { TaskLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskLinkWhereUniqueInputSchema'
import { TaskLinkCreateInputSchema } from '../inputTypeSchemas/TaskLinkCreateInputSchema'
import { TaskLinkUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskLinkUncheckedCreateInputSchema'
import { TaskLinkUpdateInputSchema } from '../inputTypeSchemas/TaskLinkUpdateInputSchema'
import { TaskLinkUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskLinkUncheckedUpdateInputSchema'
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

export const TaskLinkUpsertArgsSchema: z.ZodType<Prisma.TaskLinkUpsertArgs> = z.object({
  select: TaskLinkSelectSchema.optional(),
  include: TaskLinkIncludeSchema.optional(),
  where: TaskLinkWhereUniqueInputSchema,
  create: z.union([ TaskLinkCreateInputSchema,TaskLinkUncheckedCreateInputSchema ]),
  update: z.union([ TaskLinkUpdateInputSchema,TaskLinkUncheckedUpdateInputSchema ]),
}).strict()

export default TaskLinkUpsertArgsSchema;

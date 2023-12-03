import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkIncludeSchema } from '../inputTypeSchemas/TaskLinkIncludeSchema'
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

export const TaskLinkFindUniqueArgsSchema: z.ZodType<Prisma.TaskLinkFindUniqueArgs> = z.object({
  select: TaskLinkSelectSchema.optional(),
  include: TaskLinkIncludeSchema.optional(),
  where: TaskLinkWhereUniqueInputSchema,
}).strict()

export default TaskLinkFindUniqueArgsSchema;

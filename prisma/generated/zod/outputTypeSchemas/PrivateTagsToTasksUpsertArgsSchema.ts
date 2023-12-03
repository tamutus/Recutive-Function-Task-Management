import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema'
import { PrivateTagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereUniqueInputSchema'
import { PrivateTagsToTasksCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksCreateInputSchema'
import { PrivateTagsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUncheckedCreateInputSchema'
import { PrivateTagsToTasksUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUpdateInputSchema'
import { PrivateTagsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUncheckedUpdateInputSchema'
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

export const PrivateTagsToTasksUpsertArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksUpsertArgs> = z.object({
  select: PrivateTagsToTasksSelectSchema.optional(),
  include: PrivateTagsToTasksIncludeSchema.optional(),
  where: PrivateTagsToTasksWhereUniqueInputSchema,
  create: z.union([ PrivateTagsToTasksCreateInputSchema,PrivateTagsToTasksUncheckedCreateInputSchema ]),
  update: z.union([ PrivateTagsToTasksUpdateInputSchema,PrivateTagsToTasksUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateTagsToTasksUpsertArgsSchema;

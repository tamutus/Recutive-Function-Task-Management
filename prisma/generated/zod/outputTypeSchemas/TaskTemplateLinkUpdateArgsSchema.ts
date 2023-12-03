import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkIncludeSchema } from '../inputTypeSchemas/TaskTemplateLinkIncludeSchema'
import { TaskTemplateLinkUpdateInputSchema } from '../inputTypeSchemas/TaskTemplateLinkUpdateInputSchema'
import { TaskTemplateLinkUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskTemplateLinkUncheckedUpdateInputSchema'
import { TaskTemplateLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereUniqueInputSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskTemplateLinkSelectSchema: z.ZodType<Prisma.TaskTemplateLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export const TaskTemplateLinkUpdateArgsSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateArgs> = z.object({
  select: TaskTemplateLinkSelectSchema.optional(),
  include: TaskTemplateLinkIncludeSchema.optional(),
  data: z.union([ TaskTemplateLinkUpdateInputSchema,TaskTemplateLinkUncheckedUpdateInputSchema ]),
  where: TaskTemplateLinkWhereUniqueInputSchema,
}).strict()

export default TaskTemplateLinkUpdateArgsSchema;

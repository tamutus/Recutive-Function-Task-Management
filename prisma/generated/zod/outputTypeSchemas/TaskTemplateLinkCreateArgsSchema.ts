import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkIncludeSchema } from '../inputTypeSchemas/TaskTemplateLinkIncludeSchema'
import { TaskTemplateLinkCreateInputSchema } from '../inputTypeSchemas/TaskTemplateLinkCreateInputSchema'
import { TaskTemplateLinkUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskTemplateLinkUncheckedCreateInputSchema'
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

export const TaskTemplateLinkCreateArgsSchema: z.ZodType<Prisma.TaskTemplateLinkCreateArgs> = z.object({
  select: TaskTemplateLinkSelectSchema.optional(),
  include: TaskTemplateLinkIncludeSchema.optional(),
  data: z.union([ TaskTemplateLinkCreateInputSchema,TaskTemplateLinkUncheckedCreateInputSchema ]),
}).strict()

export default TaskTemplateLinkCreateArgsSchema;

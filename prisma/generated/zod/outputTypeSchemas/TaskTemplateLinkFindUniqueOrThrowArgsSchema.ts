import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkIncludeSchema } from '../inputTypeSchemas/TaskTemplateLinkIncludeSchema'
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

export const TaskTemplateLinkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TaskTemplateLinkFindUniqueOrThrowArgs> = z.object({
  select: TaskTemplateLinkSelectSchema.optional(),
  include: TaskTemplateLinkIncludeSchema.optional(),
  where: TaskTemplateLinkWhereUniqueInputSchema,
}).strict()

export default TaskTemplateLinkFindUniqueOrThrowArgsSchema;

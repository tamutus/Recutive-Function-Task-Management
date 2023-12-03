import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesIncludeSchema'
import { PrivateTagsToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUpdateInputSchema'
import { PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema'
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereUniqueInputSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToTaskTemplatesSelectSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToTaskTemplatesUpdateArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateArgs> = z.object({
  select: PrivateTagsToTaskTemplatesSelectSchema.optional(),
  include: PrivateTagsToTaskTemplatesIncludeSchema.optional(),
  data: z.union([ PrivateTagsToTaskTemplatesUpdateInputSchema,PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema ]),
  where: PrivateTagsToTaskTemplatesWhereUniqueInputSchema,
}).strict()

export default PrivateTagsToTaskTemplatesUpdateArgsSchema;

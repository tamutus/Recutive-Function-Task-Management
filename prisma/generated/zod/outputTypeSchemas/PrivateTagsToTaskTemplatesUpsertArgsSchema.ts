import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesIncludeSchema'
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereUniqueInputSchema'
import { PrivateTagsToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesCreateInputSchema'
import { PrivateTagsToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUncheckedCreateInputSchema'
import { PrivateTagsToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUpdateInputSchema'
import { PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema'
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

export const PrivateTagsToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpsertArgs> = z.object({
  select: PrivateTagsToTaskTemplatesSelectSchema.optional(),
  include: PrivateTagsToTaskTemplatesIncludeSchema.optional(),
  where: PrivateTagsToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ PrivateTagsToTaskTemplatesCreateInputSchema,PrivateTagsToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ PrivateTagsToTaskTemplatesUpdateInputSchema,PrivateTagsToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateTagsToTaskTemplatesUpsertArgsSchema;

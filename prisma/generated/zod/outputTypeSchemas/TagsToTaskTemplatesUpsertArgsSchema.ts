import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/TagsToTaskTemplatesIncludeSchema'
import { TagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereUniqueInputSchema'
import { TagsToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesCreateInputSchema'
import { TagsToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesUncheckedCreateInputSchema'
import { TagsToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesUpdateInputSchema'
import { TagsToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesUncheckedUpdateInputSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagsToTaskTemplatesSelectSchema: z.ZodType<Prisma.TagsToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  taggerId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const TagsToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpsertArgs> = z.object({
  select: TagsToTaskTemplatesSelectSchema.optional(),
  include: TagsToTaskTemplatesIncludeSchema.optional(),
  where: TagsToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ TagsToTaskTemplatesCreateInputSchema,TagsToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ TagsToTaskTemplatesUpdateInputSchema,TagsToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default TagsToTaskTemplatesUpsertArgsSchema;

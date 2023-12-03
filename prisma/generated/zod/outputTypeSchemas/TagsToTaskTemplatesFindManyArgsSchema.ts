import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/TagsToTaskTemplatesIncludeSchema'
import { TagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereInputSchema'
import { TagsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesOrderByWithRelationInputSchema'
import { TagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereUniqueInputSchema'
import { TagsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/TagsToTaskTemplatesScalarFieldEnumSchema'
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

export const TagsToTaskTemplatesFindManyArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesFindManyArgs> = z.object({
  select: TagsToTaskTemplatesSelectSchema.optional(),
  include: TagsToTaskTemplatesIncludeSchema.optional(),
  where: TagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTaskTemplatesOrderByWithRelationInputSchema.array(),TagsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsToTaskTemplatesScalarFieldEnumSchema,TagsToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TagsToTaskTemplatesFindManyArgsSchema;

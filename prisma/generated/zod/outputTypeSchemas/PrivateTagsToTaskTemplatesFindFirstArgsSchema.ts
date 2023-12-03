import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesIncludeSchema'
import { PrivateTagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereInputSchema'
import { PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema'
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereUniqueInputSchema'
import { PrivateTagsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesScalarFieldEnumSchema'
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

export const PrivateTagsToTaskTemplatesFindFirstArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesFindFirstArgs> = z.object({
  select: PrivateTagsToTaskTemplatesSelectSchema.optional(),
  include: PrivateTagsToTaskTemplatesIncludeSchema.optional(),
  where: PrivateTagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema.array(),PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateTagsToTaskTemplatesScalarFieldEnumSchema,PrivateTagsToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateTagsToTaskTemplatesFindFirstArgsSchema;

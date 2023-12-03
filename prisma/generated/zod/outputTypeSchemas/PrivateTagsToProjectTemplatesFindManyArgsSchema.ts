import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesIncludeSchema'
import { PrivateTagsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereInputSchema'
import { PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema'
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereUniqueInputSchema'
import { PrivateTagsToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesScalarFieldEnumSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToProjectTemplatesSelectSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  privateTagId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  privateTag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToProjectTemplatesFindManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesFindManyArgs> = z.object({
  select: PrivateTagsToProjectTemplatesSelectSchema.optional(),
  include: PrivateTagsToProjectTemplatesIncludeSchema.optional(),
  where: PrivateTagsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema.array(),PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateTagsToProjectTemplatesScalarFieldEnumSchema,PrivateTagsToProjectTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateTagsToProjectTemplatesFindManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesIncludeSchema'
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereUniqueInputSchema'
import { PrivateTagsToProjectTemplatesCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesCreateInputSchema'
import { PrivateTagsToProjectTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUncheckedCreateInputSchema'
import { PrivateTagsToProjectTemplatesUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUpdateInputSchema'
import { PrivateTagsToProjectTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUncheckedUpdateInputSchema'
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

export const PrivateTagsToProjectTemplatesUpsertArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpsertArgs> = z.object({
  select: PrivateTagsToProjectTemplatesSelectSchema.optional(),
  include: PrivateTagsToProjectTemplatesIncludeSchema.optional(),
  where: PrivateTagsToProjectTemplatesWhereUniqueInputSchema,
  create: z.union([ PrivateTagsToProjectTemplatesCreateInputSchema,PrivateTagsToProjectTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ PrivateTagsToProjectTemplatesUpdateInputSchema,PrivateTagsToProjectTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateTagsToProjectTemplatesUpsertArgsSchema;

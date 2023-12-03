import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesIncludeSchema'
import { PrivateTagsToProjectTemplatesCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesCreateInputSchema'
import { PrivateTagsToProjectTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUncheckedCreateInputSchema'
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

export const PrivateTagsToProjectTemplatesCreateArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateArgs> = z.object({
  select: PrivateTagsToProjectTemplatesSelectSchema.optional(),
  include: PrivateTagsToProjectTemplatesIncludeSchema.optional(),
  data: z.union([ PrivateTagsToProjectTemplatesCreateInputSchema,PrivateTagsToProjectTemplatesUncheckedCreateInputSchema ]),
}).strict()

export default PrivateTagsToProjectTemplatesCreateArgsSchema;

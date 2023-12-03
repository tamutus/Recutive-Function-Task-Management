import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectsIncludeSchema'
import { PrivateTagsToProjectsCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsCreateInputSchema'
import { PrivateTagsToProjectsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsUncheckedCreateInputSchema'
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToProjectsSelectSchema: z.ZodType<Prisma.PrivateTagsToProjectsSelect> = z.object({
  tagId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToProjectsCreateArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateArgs> = z.object({
  select: PrivateTagsToProjectsSelectSchema.optional(),
  include: PrivateTagsToProjectsIncludeSchema.optional(),
  data: z.union([ PrivateTagsToProjectsCreateInputSchema,PrivateTagsToProjectsUncheckedCreateInputSchema ]),
}).strict()

export default PrivateTagsToProjectsCreateArgsSchema;

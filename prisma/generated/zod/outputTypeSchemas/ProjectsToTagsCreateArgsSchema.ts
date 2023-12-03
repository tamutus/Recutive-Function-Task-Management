import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsIncludeSchema } from '../inputTypeSchemas/ProjectsToTagsIncludeSchema'
import { ProjectsToTagsCreateInputSchema } from '../inputTypeSchemas/ProjectsToTagsCreateInputSchema'
import { ProjectsToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUncheckedCreateInputSchema'
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectsToTagsSelectSchema: z.ZodType<Prisma.ProjectsToTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const ProjectsToTagsCreateArgsSchema: z.ZodType<Prisma.ProjectsToTagsCreateArgs> = z.object({
  select: ProjectsToTagsSelectSchema.optional(),
  include: ProjectsToTagsIncludeSchema.optional(),
  data: z.union([ ProjectsToTagsCreateInputSchema,ProjectsToTagsUncheckedCreateInputSchema ]),
}).strict()

export default ProjectsToTagsCreateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsIncludeSchema } from '../inputTypeSchemas/ProjectsToTagsIncludeSchema'
import { ProjectsToTagsUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUpdateInputSchema'
import { ProjectsToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUncheckedUpdateInputSchema'
import { ProjectsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereUniqueInputSchema'
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

export const ProjectsToTagsUpdateArgsSchema: z.ZodType<Prisma.ProjectsToTagsUpdateArgs> = z.object({
  select: ProjectsToTagsSelectSchema.optional(),
  include: ProjectsToTagsIncludeSchema.optional(),
  data: z.union([ ProjectsToTagsUpdateInputSchema,ProjectsToTagsUncheckedUpdateInputSchema ]),
  where: ProjectsToTagsWhereUniqueInputSchema,
}).strict()

export default ProjectsToTagsUpdateArgsSchema;

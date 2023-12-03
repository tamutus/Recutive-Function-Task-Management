import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsIncludeSchema } from '../inputTypeSchemas/ProjectsToTagsIncludeSchema'
import { ProjectsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereUniqueInputSchema'
import { ProjectsToTagsCreateInputSchema } from '../inputTypeSchemas/ProjectsToTagsCreateInputSchema'
import { ProjectsToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUncheckedCreateInputSchema'
import { ProjectsToTagsUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUpdateInputSchema'
import { ProjectsToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTagsUncheckedUpdateInputSchema'
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

export const ProjectsToTagsUpsertArgsSchema: z.ZodType<Prisma.ProjectsToTagsUpsertArgs> = z.object({
  select: ProjectsToTagsSelectSchema.optional(),
  include: ProjectsToTagsIncludeSchema.optional(),
  where: ProjectsToTagsWhereUniqueInputSchema,
  create: z.union([ ProjectsToTagsCreateInputSchema,ProjectsToTagsUncheckedCreateInputSchema ]),
  update: z.union([ ProjectsToTagsUpdateInputSchema,ProjectsToTagsUncheckedUpdateInputSchema ]),
}).strict()

export default ProjectsToTagsUpsertArgsSchema;

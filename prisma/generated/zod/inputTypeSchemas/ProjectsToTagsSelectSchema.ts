import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const ProjectsToTagsSelectSchema: z.ZodType<Prisma.ProjectsToTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default ProjectsToTagsSelectSchema;

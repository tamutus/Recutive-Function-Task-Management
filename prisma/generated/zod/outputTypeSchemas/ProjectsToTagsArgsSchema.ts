import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsSelectSchema } from '../inputTypeSchemas/ProjectsToTagsSelectSchema';
import { ProjectsToTagsIncludeSchema } from '../inputTypeSchemas/ProjectsToTagsIncludeSchema';

export const ProjectsToTagsArgsSchema: z.ZodType<Prisma.ProjectsToTagsDefaultArgs> = z.object({
  select: z.lazy(() => ProjectsToTagsSelectSchema).optional(),
  include: z.lazy(() => ProjectsToTagsIncludeSchema).optional(),
}).strict();

export default ProjectsToTagsArgsSchema;

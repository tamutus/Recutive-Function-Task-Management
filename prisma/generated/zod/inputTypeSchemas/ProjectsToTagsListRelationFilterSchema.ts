import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereInputSchema } from './ProjectsToTagsWhereInputSchema';

export const ProjectsToTagsListRelationFilterSchema: z.ZodType<Prisma.ProjectsToTagsListRelationFilter> = z.object({
  every: z.lazy(() => ProjectsToTagsWhereInputSchema).optional(),
  some: z.lazy(() => ProjectsToTagsWhereInputSchema).optional(),
  none: z.lazy(() => ProjectsToTagsWhereInputSchema).optional()
}).strict();

export default ProjectsToTagsListRelationFilterSchema;

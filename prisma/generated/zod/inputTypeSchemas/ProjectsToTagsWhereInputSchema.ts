import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectsToTagsWhereInputSchema: z.ZodType<Prisma.ProjectsToTagsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsToTagsWhereInputSchema),z.lazy(() => ProjectsToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTagsWhereInputSchema),z.lazy(() => ProjectsToTagsWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export default ProjectsToTagsWhereInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const ProjectsToTagsScalarWhereInputSchema: z.ZodType<Prisma.ProjectsToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsToTagsScalarWhereInputSchema),z.lazy(() => ProjectsToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTagsScalarWhereInputSchema),z.lazy(() => ProjectsToTagsScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectsToTagsScalarWhereInputSchema;

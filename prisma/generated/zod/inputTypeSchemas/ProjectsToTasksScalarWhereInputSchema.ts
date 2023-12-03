import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const ProjectsToTasksScalarWhereInputSchema: z.ZodType<Prisma.ProjectsToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsToTasksScalarWhereInputSchema),z.lazy(() => ProjectsToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTasksScalarWhereInputSchema),z.lazy(() => ProjectsToTasksScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectsToTasksScalarWhereInputSchema;

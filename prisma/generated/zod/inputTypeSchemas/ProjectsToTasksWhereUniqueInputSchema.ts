import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema } from './ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema';
import { ProjectsToTasksWhereInputSchema } from './ProjectsToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const ProjectsToTasksWhereUniqueInputSchema: z.ZodType<Prisma.ProjectsToTasksWhereUniqueInput> = z.object({
  projectId_taskId: z.lazy(() => ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_taskId: z.lazy(() => ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProjectsToTasksWhereInputSchema),z.lazy(() => ProjectsToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTasksWhereInputSchema),z.lazy(() => ProjectsToTasksWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default ProjectsToTasksWhereUniqueInputSchema;

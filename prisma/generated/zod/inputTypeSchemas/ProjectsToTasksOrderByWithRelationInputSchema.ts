import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const ProjectsToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectsToTasksOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default ProjectsToTasksOrderByWithRelationInputSchema;

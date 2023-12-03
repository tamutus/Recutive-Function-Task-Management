import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksScalarWhereInputSchema } from './ProjectsToTasksScalarWhereInputSchema';
import { ProjectsToTasksUpdateManyMutationInputSchema } from './ProjectsToTasksUpdateManyMutationInputSchema';
import { ProjectsToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './ProjectsToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTasksUpdateManyMutationInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema;

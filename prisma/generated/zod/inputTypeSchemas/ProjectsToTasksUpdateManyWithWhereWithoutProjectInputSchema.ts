import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksScalarWhereInputSchema } from './ProjectsToTasksScalarWhereInputSchema';
import { ProjectsToTasksUpdateManyMutationInputSchema } from './ProjectsToTasksUpdateManyMutationInputSchema';
import { ProjectsToTasksUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectsToTasksUncheckedUpdateManyWithoutProjectInputSchema';

export const ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTasksUpdateManyMutationInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema;

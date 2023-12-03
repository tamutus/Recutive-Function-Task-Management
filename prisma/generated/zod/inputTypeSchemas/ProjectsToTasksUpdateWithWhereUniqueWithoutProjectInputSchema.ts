import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithoutProjectInputSchema } from './ProjectsToTasksUpdateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema';

export const ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTasksUpdateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema;

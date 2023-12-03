import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithoutTaskInputSchema } from './ProjectsToTasksUpdateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema';

export const ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;

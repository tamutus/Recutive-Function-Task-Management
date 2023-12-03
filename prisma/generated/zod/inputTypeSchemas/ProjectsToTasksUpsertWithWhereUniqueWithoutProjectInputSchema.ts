import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithoutProjectInputSchema } from './ProjectsToTasksUpdateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema';
import { ProjectsToTasksCreateWithoutProjectInputSchema } from './ProjectsToTasksCreateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedCreateWithoutProjectInputSchema';

export const ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectsToTasksUpdateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema;

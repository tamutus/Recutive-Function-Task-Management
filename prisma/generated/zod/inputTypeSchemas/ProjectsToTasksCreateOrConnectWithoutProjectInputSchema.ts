import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksCreateWithoutProjectInputSchema } from './ProjectsToTasksCreateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedCreateWithoutProjectInputSchema';

export const ProjectsToTasksCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTasksCreateOrConnectWithoutProjectInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksCreateWithoutTaskInputSchema } from './ProjectsToTasksCreateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedCreateWithoutTaskInputSchema';

export const ProjectsToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectsToTasksCreateOrConnectWithoutTaskInputSchema;

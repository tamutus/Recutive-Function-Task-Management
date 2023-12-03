import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithoutTaskInputSchema } from './ProjectsToTasksUpdateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema';
import { ProjectsToTasksCreateWithoutTaskInputSchema } from './ProjectsToTasksCreateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedCreateWithoutTaskInputSchema';

export const ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateWithoutProjectInputSchema } from './ProjectsToTasksCreateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedCreateWithoutProjectInputSchema';
import { ProjectsToTasksCreateOrConnectWithoutProjectInputSchema } from './ProjectsToTasksCreateOrConnectWithoutProjectInputSchema';
import { ProjectsToTasksCreateManyProjectInputEnvelopeSchema } from './ProjectsToTasksCreateManyProjectInputEnvelopeSchema';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';

export const ProjectsToTasksCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTasksCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTasksCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTasksCreateNestedManyWithoutProjectInputSchema;

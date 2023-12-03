import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateWithoutTaskInputSchema } from './ProjectsToTasksCreateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedCreateWithoutTaskInputSchema';
import { ProjectsToTasksCreateOrConnectWithoutTaskInputSchema } from './ProjectsToTasksCreateOrConnectWithoutTaskInputSchema';
import { ProjectsToTasksCreateManyTaskInputEnvelopeSchema } from './ProjectsToTasksCreateManyTaskInputEnvelopeSchema';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';

export const ProjectsToTasksCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTasksCreateNestedManyWithoutTaskInputSchema;

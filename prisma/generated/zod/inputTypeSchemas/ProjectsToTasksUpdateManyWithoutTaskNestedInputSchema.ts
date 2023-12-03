import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateWithoutTaskInputSchema } from './ProjectsToTasksCreateWithoutTaskInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutTaskInputSchema } from './ProjectsToTasksUncheckedCreateWithoutTaskInputSchema';
import { ProjectsToTasksCreateOrConnectWithoutTaskInputSchema } from './ProjectsToTasksCreateOrConnectWithoutTaskInputSchema';
import { ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { ProjectsToTasksCreateManyTaskInputEnvelopeSchema } from './ProjectsToTasksCreateManyTaskInputEnvelopeSchema';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { ProjectsToTasksScalarWhereInputSchema } from './ProjectsToTasksScalarWhereInputSchema';

export const ProjectsToTasksUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => ProjectsToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsToTasksScalarWhereInputSchema),z.lazy(() => ProjectsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTasksUpdateManyWithoutTaskNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateWithoutProjectInputSchema } from './ProjectsToTasksCreateWithoutProjectInputSchema';
import { ProjectsToTasksUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTasksUncheckedCreateWithoutProjectInputSchema';
import { ProjectsToTasksCreateOrConnectWithoutProjectInputSchema } from './ProjectsToTasksCreateOrConnectWithoutProjectInputSchema';
import { ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectsToTasksCreateManyProjectInputEnvelopeSchema } from './ProjectsToTasksCreateManyProjectInputEnvelopeSchema';
import { ProjectsToTasksWhereUniqueInputSchema } from './ProjectsToTasksWhereUniqueInputSchema';
import { ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectsToTasksScalarWhereInputSchema } from './ProjectsToTasksScalarWhereInputSchema';

export const ProjectsToTasksUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTasksCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTasksCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTasksWhereUniqueInputSchema),z.lazy(() => ProjectsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectsToTasksUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsToTasksScalarWhereInputSchema),z.lazy(() => ProjectsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTasksUncheckedUpdateManyWithoutProjectNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateWithoutProjectInputSchema } from './ProjectsToTagsCreateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedCreateWithoutProjectInputSchema';
import { ProjectsToTagsCreateOrConnectWithoutProjectInputSchema } from './ProjectsToTagsCreateOrConnectWithoutProjectInputSchema';
import { ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectsToTagsCreateManyProjectInputEnvelopeSchema } from './ProjectsToTagsCreateManyProjectInputEnvelopeSchema';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectsToTagsScalarWhereInputSchema } from './ProjectsToTagsScalarWhereInputSchema';

export const ProjectsToTagsUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTagsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTagsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsToTagsScalarWhereInputSchema),z.lazy(() => ProjectsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTagsUpdateManyWithoutProjectNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateWithoutTagInputSchema } from './ProjectsToTagsCreateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectsToTagsUncheckedCreateWithoutTagInputSchema';
import { ProjectsToTagsCreateOrConnectWithoutTagInputSchema } from './ProjectsToTagsCreateOrConnectWithoutTagInputSchema';
import { ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { ProjectsToTagsCreateManyTagInputEnvelopeSchema } from './ProjectsToTagsCreateManyTagInputEnvelopeSchema';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema } from './ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { ProjectsToTagsScalarWhereInputSchema } from './ProjectsToTagsScalarWhereInputSchema';

export const ProjectsToTagsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => ProjectsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectsToTagsScalarWhereInputSchema),z.lazy(() => ProjectsToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTagsUpdateManyWithoutTagNestedInputSchema;

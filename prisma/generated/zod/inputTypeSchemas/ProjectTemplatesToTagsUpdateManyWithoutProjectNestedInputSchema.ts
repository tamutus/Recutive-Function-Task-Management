import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';

export const ProjectTemplatesToTagsUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUpdateManyWithoutProjectNestedInputSchema;

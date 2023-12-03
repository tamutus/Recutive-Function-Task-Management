import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema } from './ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesScalarWhereInputSchema } from './ProjectTemplatesToTaskTemplatesScalarWhereInputSchema';

export const ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';

export const ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema;

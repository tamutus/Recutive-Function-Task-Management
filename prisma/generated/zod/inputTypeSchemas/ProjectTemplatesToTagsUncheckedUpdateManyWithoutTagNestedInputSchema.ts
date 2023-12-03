import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema';
import { ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema } from './ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema } from './ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';

export const ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema;

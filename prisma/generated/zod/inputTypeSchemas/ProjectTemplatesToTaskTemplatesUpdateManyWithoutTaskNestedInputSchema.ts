import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesScalarWhereInputSchema } from './ProjectTemplatesToTaskTemplatesScalarWhereInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema;

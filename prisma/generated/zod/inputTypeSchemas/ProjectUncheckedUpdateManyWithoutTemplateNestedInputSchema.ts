import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutTemplateInputSchema } from './ProjectCreateWithoutTemplateInputSchema';
import { ProjectUncheckedCreateWithoutTemplateInputSchema } from './ProjectUncheckedCreateWithoutTemplateInputSchema';
import { ProjectCreateOrConnectWithoutTemplateInputSchema } from './ProjectCreateOrConnectWithoutTemplateInputSchema';
import { ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema } from './ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { ProjectCreateManyTemplateInputEnvelopeSchema } from './ProjectCreateManyTemplateInputEnvelopeSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema } from './ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { ProjectUpdateManyWithWhereWithoutTemplateInputSchema } from './ProjectUpdateManyWithWhereWithoutTemplateInputSchema';
import { ProjectScalarWhereInputSchema } from './ProjectScalarWhereInputSchema';

export const ProjectUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTemplateInputSchema),z.lazy(() => ProjectCreateWithoutTemplateInputSchema).array(),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => ProjectCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectWhereUniqueInputSchema),z.lazy(() => ProjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectWhereUniqueInputSchema),z.lazy(() => ProjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectWhereUniqueInputSchema),z.lazy(() => ProjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectWhereUniqueInputSchema),z.lazy(() => ProjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => ProjectUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectScalarWhereInputSchema),z.lazy(() => ProjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectUncheckedUpdateManyWithoutTemplateNestedInputSchema;

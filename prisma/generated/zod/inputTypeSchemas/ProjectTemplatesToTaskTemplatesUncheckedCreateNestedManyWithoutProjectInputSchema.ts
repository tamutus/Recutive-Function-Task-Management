import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema } from './ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';

export const ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema;

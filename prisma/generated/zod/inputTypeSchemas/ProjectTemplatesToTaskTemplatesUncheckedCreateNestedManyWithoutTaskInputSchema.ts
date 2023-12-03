import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';

export const ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema;

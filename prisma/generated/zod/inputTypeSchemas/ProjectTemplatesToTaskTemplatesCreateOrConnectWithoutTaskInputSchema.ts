import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;

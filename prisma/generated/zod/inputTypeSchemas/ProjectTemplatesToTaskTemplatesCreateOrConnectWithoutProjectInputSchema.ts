import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateOrConnectWithoutProjectInputSchema;

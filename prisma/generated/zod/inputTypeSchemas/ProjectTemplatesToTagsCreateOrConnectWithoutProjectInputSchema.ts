import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema';

export const ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsCreateOrConnectWithoutProjectInputSchema;

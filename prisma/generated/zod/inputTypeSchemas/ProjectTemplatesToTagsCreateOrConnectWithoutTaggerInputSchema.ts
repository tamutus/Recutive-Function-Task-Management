import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema';

export const ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsCreateOrConnectWithoutTaggerInputSchema;

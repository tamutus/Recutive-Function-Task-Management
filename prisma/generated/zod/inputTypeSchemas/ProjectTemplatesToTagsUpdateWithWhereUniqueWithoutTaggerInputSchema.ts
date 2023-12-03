import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema';

export const ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema;

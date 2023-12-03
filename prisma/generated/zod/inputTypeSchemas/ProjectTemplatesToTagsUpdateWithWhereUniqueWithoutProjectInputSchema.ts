import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema';

export const ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutProjectInputSchema;

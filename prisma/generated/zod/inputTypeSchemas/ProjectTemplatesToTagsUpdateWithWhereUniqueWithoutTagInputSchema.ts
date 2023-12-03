import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutTagInputSchema } from './ProjectTemplatesToTagsUpdateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema';

export const ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateWithWhereUniqueWithoutTagInputSchema;

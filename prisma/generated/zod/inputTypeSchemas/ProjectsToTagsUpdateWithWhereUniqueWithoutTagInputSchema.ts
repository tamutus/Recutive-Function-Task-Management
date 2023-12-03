import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithoutTagInputSchema } from './ProjectsToTagsUpdateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedUpdateWithoutTagInputSchema } from './ProjectsToTagsUncheckedUpdateWithoutTagInputSchema';

export const ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTagsUpdateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default ProjectsToTagsUpdateWithWhereUniqueWithoutTagInputSchema;

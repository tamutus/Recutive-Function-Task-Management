import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithoutProjectInputSchema } from './ProjectsToTagsUpdateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema';

export const ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTagsUpdateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTagsUpdateWithWhereUniqueWithoutProjectInputSchema;

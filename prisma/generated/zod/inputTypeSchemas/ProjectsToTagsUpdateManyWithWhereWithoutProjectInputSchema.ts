import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsScalarWhereInputSchema } from './ProjectsToTagsScalarWhereInputSchema';
import { ProjectsToTagsUpdateManyMutationInputSchema } from './ProjectsToTagsUpdateManyMutationInputSchema';
import { ProjectsToTagsUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectsToTagsUncheckedUpdateManyWithoutProjectInputSchema';

export const ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTagsUpdateManyMutationInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTagsUpdateManyWithWhereWithoutProjectInputSchema;

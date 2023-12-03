import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsScalarWhereInputSchema } from './ProjectsToTagsScalarWhereInputSchema';
import { ProjectsToTagsUpdateManyMutationInputSchema } from './ProjectsToTagsUpdateManyMutationInputSchema';
import { ProjectsToTagsUncheckedUpdateManyWithoutTagInputSchema } from './ProjectsToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectsToTagsUpdateManyMutationInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default ProjectsToTagsUpdateManyWithWhereWithoutTagInputSchema;

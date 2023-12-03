import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithoutTagInputSchema } from './ProjectsToTagsUpdateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedUpdateWithoutTagInputSchema } from './ProjectsToTagsUncheckedUpdateWithoutTagInputSchema';
import { ProjectsToTagsCreateWithoutTagInputSchema } from './ProjectsToTagsCreateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectsToTagsUncheckedCreateWithoutTagInputSchema';

export const ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectsToTagsUpdateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ProjectsToTagsUpsertWithWhereUniqueWithoutTagInputSchema;

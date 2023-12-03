import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsUpdateWithoutProjectInputSchema } from './ProjectsToTagsUpdateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema';
import { ProjectsToTagsCreateWithoutProjectInputSchema } from './ProjectsToTagsCreateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedCreateWithoutProjectInputSchema';

export const ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectsToTagsUpdateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTagsUpsertWithWhereUniqueWithoutProjectInputSchema;

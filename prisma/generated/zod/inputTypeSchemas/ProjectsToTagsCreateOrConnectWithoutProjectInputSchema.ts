import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsCreateWithoutProjectInputSchema } from './ProjectsToTagsCreateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedCreateWithoutProjectInputSchema';

export const ProjectsToTagsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectsToTagsCreateOrConnectWithoutProjectInputSchema;

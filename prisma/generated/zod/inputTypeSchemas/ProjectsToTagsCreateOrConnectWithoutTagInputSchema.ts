import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';
import { ProjectsToTagsCreateWithoutTagInputSchema } from './ProjectsToTagsCreateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectsToTagsUncheckedCreateWithoutTagInputSchema';

export const ProjectsToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ProjectsToTagsCreateOrConnectWithoutTagInputSchema;

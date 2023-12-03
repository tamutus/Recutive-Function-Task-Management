import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutTagsInputSchema } from './ProjectCreateNestedOneWithoutTagsInputSchema';

export const ProjectsToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default ProjectsToTagsCreateWithoutTagInputSchema;

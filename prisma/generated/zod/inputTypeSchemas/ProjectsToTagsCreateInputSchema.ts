import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutProjectsInputSchema } from './TagCreateNestedOneWithoutProjectsInputSchema';
import { ProjectCreateNestedOneWithoutTagsInputSchema } from './ProjectCreateNestedOneWithoutTagsInputSchema';

export const ProjectsToTagsCreateInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutProjectsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default ProjectsToTagsCreateInputSchema;

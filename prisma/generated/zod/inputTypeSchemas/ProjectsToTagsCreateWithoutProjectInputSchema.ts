import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutProjectsInputSchema } from './TagCreateNestedOneWithoutProjectsInputSchema';

export const ProjectsToTagsCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateWithoutProjectInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default ProjectsToTagsCreateWithoutProjectInputSchema;

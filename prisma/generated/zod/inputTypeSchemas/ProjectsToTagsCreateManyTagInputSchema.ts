import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsCreateManyTagInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default ProjectsToTagsCreateManyTagInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsCreateManyProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyProjectInput> = z.object({
  tagId: z.number().int()
}).strict();

export default ProjectsToTagsCreateManyProjectInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsCreateManyInputSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyInput> = z.object({
  tagId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default ProjectsToTagsCreateManyInputSchema;

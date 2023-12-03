import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedCreateInput> = z.object({
  tagId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default ProjectsToTagsUncheckedCreateInputSchema;

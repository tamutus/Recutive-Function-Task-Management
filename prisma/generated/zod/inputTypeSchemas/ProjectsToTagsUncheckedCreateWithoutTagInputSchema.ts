import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedCreateWithoutTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default ProjectsToTagsUncheckedCreateWithoutTagInputSchema;

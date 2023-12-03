import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedCreateWithoutProjectInput> = z.object({
  tagId: z.number().int()
}).strict();

export default ProjectsToTagsUncheckedCreateWithoutProjectInputSchema;

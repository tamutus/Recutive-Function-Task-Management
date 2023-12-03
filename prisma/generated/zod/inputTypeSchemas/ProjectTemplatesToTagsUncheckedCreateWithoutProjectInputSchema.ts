import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateWithoutProjectInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema;

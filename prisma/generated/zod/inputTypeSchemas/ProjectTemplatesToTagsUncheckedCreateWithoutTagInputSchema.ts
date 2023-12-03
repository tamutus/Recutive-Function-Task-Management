import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateWithoutTagInput> = z.object({
  projectId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema;

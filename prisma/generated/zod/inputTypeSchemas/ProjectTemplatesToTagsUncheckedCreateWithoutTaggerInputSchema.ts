import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInput> = z.object({
  projectId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema;

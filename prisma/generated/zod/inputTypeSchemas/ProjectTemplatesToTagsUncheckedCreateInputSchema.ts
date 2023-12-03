import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsUncheckedCreateInputSchema;

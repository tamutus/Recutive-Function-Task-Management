import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsCreateManyTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyTaggerInput> = z.object({
  projectId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsCreateManyTaggerInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsCreateManyTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyTagInput> = z.object({
  projectId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsCreateManyTagInputSchema;

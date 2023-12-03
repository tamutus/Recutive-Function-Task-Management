import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsCreateManyInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyInput> = z.object({
  projectId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsCreateManyInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsCreateManyProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyProjectInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default ProjectTemplatesToTagsCreateManyProjectInputSchema;

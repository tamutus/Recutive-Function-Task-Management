import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTagsProjectIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsProjectIdTagIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  tagId: z.number()
}).strict();

export default ProjectTemplatesToTagsProjectIdTagIdCompoundUniqueInputSchema;

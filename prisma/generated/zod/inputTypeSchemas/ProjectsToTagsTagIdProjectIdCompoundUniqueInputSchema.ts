import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTagsTagIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectsToTagsTagIdProjectIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  projectId: z.number()
}).strict();

export default ProjectsToTagsTagIdProjectIdCompoundUniqueInputSchema;

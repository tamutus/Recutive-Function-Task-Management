import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  taskId: z.number()
}).strict();

export default ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema;

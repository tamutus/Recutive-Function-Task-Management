import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectTemplateCreatelinksInputSchema: z.ZodType<Prisma.ProjectTemplateCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default ProjectTemplateCreatelinksInputSchema;

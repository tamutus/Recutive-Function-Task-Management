import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectCreatelinksInputSchema: z.ZodType<Prisma.ProjectCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default ProjectCreatelinksInputSchema;

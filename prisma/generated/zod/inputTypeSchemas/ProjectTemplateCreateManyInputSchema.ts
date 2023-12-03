import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreatelinksInputSchema } from './ProjectTemplateCreatelinksInputSchema';

export const ProjectTemplateCreateManyInputSchema: z.ZodType<Prisma.ProjectTemplateCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProjectTemplateCreateManyInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreatelinksInputSchema } from './ProjectCreatelinksInputSchema';

export const ProjectCreateManyTemplateInputSchema: z.ZodType<Prisma.ProjectCreateManyTemplateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectCreatelinksInputSchema),z.string().array() ]).optional(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable()
}).strict();

export default ProjectCreateManyTemplateInputSchema;

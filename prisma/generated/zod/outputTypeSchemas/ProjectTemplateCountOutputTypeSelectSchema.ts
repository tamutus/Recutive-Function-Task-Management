import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProjectTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectTemplateCountOutputTypeSelect> = z.object({
  collaborators: z.boolean().optional(),
  energies: z.boolean().optional(),
  tags: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  privateTags: z.boolean().optional(),
  tasks: z.boolean().optional(),
  implementations: z.boolean().optional(),
}).strict();

export default ProjectTemplateCountOutputTypeSelectSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z.object({
  volunteers: z.boolean().optional(),
  tasks: z.boolean().optional(),
  priorities: z.boolean().optional(),
  energies: z.boolean().optional(),
  tags: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  privateTags: z.boolean().optional(),
}).strict();

export default ProjectCountOutputTypeSelectSchema;

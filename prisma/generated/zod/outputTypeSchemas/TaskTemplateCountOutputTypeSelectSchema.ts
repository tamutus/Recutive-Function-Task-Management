import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TaskTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.TaskTemplateCountOutputTypeSelect> = z.object({
  projects: z.boolean().optional(),
  precursors: z.boolean().optional(),
  successors: z.boolean().optional(),
  skills: z.boolean().optional(),
  tags: z.boolean().optional(),
  privateTags: z.boolean().optional(),
  energies: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  collaborators: z.boolean().optional(),
  implementations: z.boolean().optional(),
}).strict();

export default TaskTemplateCountOutputTypeSelectSchema;

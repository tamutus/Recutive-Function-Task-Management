import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TaskCountOutputTypeSelectSchema: z.ZodType<Prisma.TaskCountOutputTypeSelect> = z.object({
  precursors: z.boolean().optional(),
  successors: z.boolean().optional(),
  projects: z.boolean().optional(),
  work: z.boolean().optional(),
  skills: z.boolean().optional(),
  priorities: z.boolean().optional(),
  tags: z.boolean().optional(),
  privateTags: z.boolean().optional(),
  energies: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
}).strict();

export default TaskCountOutputTypeSelectSchema;

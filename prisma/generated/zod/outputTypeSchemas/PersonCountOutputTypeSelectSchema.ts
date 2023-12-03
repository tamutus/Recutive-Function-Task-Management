import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PersonCountOutputTypeSelectSchema: z.ZodType<Prisma.PersonCountOutputTypeSelect> = z.object({
  priorities: z.boolean().optional(),
  projects: z.boolean().optional(),
  tasks: z.boolean().optional(),
  skillPaths: z.boolean().optional(),
  skills: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  privateTags: z.boolean().optional(),
  energies: z.boolean().optional(),
  editedProjects: z.boolean().optional(),
  editedTasks: z.boolean().optional(),
  tagFollows: z.boolean().optional(),
  projectTags: z.boolean().optional(),
  taskTags: z.boolean().optional(),
  skillTags: z.boolean().optional(),
  skillPathTags: z.boolean().optional(),
  energyTags: z.boolean().optional(),
}).strict();

export default PersonCountOutputTypeSelectSchema;

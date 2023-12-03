import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  projectTemplates: z.boolean().optional(),
  taskTemplates: z.boolean().optional(),
  priorities: z.boolean().optional(),
  energies: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  skills: z.boolean().optional(),
  paths: z.boolean().optional(),
  followers: z.boolean().optional(),
  projects: z.boolean().optional(),
  tasks: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;

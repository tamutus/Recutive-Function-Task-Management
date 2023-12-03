import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SkillCountOutputTypeSelectSchema: z.ZodType<Prisma.SkillCountOutputTypeSelect> = z.object({
  paths: z.boolean().optional(),
  precedes: z.boolean().optional(),
  succeeds: z.boolean().optional(),
  taskTemplates: z.boolean().optional(),
  tasks: z.boolean().optional(),
  students: z.boolean().optional(),
  energies: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
  priorities: z.boolean().optional(),
  tags: z.boolean().optional(),
}).strict();

export default SkillCountOutputTypeSelectSchema;

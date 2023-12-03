import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PrivateTagCountOutputTypeSelectSchema: z.ZodType<Prisma.PrivateTagCountOutputTypeSelect> = z.object({
  projectTemplates: z.boolean().optional(),
  projects: z.boolean().optional(),
  taskTemplates: z.boolean().optional(),
  tasks: z.boolean().optional(),
  priorities: z.boolean().optional(),
  energies: z.boolean().optional(),
  privateEnergies: z.boolean().optional(),
}).strict();

export default PrivateTagCountOutputTypeSelectSchema;

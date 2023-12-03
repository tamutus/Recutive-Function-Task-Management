import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EnergyCountOutputTypeSelectSchema: z.ZodType<Prisma.EnergyCountOutputTypeSelect> = z.object({
  projectTemplates: z.boolean().optional(),
  taskTemplates: z.boolean().optional(),
  skills: z.boolean().optional(),
  tags: z.boolean().optional(),
  experiences: z.boolean().optional(),
  projects: z.boolean().optional(),
  tasks: z.boolean().optional(),
  taskWork: z.boolean().optional(),
  privateTags: z.boolean().optional(),
}).strict();

export default EnergyCountOutputTypeSelectSchema;

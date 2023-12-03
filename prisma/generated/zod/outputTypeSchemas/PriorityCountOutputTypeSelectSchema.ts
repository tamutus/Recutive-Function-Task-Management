import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PriorityCountOutputTypeSelectSchema: z.ZodType<Prisma.PriorityCountOutputTypeSelect> = z.object({
  tasks: z.boolean().optional(),
  projects: z.boolean().optional(),
  skills: z.boolean().optional(),
  skillPaths: z.boolean().optional(),
  tags: z.boolean().optional(),
  privateTags: z.boolean().optional(),
}).strict();

export default PriorityCountOutputTypeSelectSchema;

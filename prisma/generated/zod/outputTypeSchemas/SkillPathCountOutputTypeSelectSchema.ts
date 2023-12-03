import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SkillPathCountOutputTypeSelectSchema: z.ZodType<Prisma.SkillPathCountOutputTypeSelect> = z.object({
  skills: z.boolean().optional(),
  students: z.boolean().optional(),
  tags: z.boolean().optional(),
  priorities: z.boolean().optional(),
}).strict();

export default SkillPathCountOutputTypeSelectSchema;

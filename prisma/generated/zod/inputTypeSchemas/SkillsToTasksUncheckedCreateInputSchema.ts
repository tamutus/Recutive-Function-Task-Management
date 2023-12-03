import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedCreateInput> = z.object({
  taskId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default SkillsToTasksUncheckedCreateInputSchema;

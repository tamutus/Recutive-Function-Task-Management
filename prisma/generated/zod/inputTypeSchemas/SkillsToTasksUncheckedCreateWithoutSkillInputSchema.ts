import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedCreateWithoutSkillInput> = z.object({
  taskId: z.number().int()
}).strict();

export default SkillsToTasksUncheckedCreateWithoutSkillInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedCreateWithoutTaskInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToTasksUncheckedCreateWithoutTaskInputSchema;

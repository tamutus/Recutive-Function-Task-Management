import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.SkillsToTasksCreateManyTaskInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToTasksCreateManyTaskInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksCreateManySkillInputSchema: z.ZodType<Prisma.SkillsToTasksCreateManySkillInput> = z.object({
  taskId: z.number().int()
}).strict();

export default SkillsToTasksCreateManySkillInputSchema;

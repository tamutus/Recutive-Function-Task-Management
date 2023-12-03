import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksCreateManyInputSchema: z.ZodType<Prisma.SkillsToTasksCreateManyInput> = z.object({
  taskId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default SkillsToTasksCreateManyInputSchema;

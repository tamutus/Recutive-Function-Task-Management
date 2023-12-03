import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillsToTasksTaskIdSkillIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  skillId: z.number()
}).strict();

export default SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema;

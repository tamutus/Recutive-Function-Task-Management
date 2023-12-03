import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedCreateInput> = z.object({
  taskId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesUncheckedCreateInputSchema;

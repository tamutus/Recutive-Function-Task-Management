import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedCreateWithoutSkillInput> = z.object({
  taskId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema;

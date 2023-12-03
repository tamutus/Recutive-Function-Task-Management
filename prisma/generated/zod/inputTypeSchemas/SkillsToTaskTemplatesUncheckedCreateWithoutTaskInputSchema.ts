import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedCreateWithoutTaskInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema;

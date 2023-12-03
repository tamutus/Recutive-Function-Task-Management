import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManyTaskInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesCreateManyTaskInputSchema;

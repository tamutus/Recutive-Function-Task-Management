import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesCreateManySkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManySkillInput> = z.object({
  taskId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesCreateManySkillInputSchema;

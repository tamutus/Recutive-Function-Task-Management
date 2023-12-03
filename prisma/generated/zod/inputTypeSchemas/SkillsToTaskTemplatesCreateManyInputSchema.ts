import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManyInput> = z.object({
  taskId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default SkillsToTaskTemplatesCreateManyInputSchema;

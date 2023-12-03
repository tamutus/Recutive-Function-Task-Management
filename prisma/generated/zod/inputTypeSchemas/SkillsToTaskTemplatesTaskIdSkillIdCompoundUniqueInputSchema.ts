import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  skillId: z.number()
}).strict();

export default SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema;

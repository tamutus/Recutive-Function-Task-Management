import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsSkillIdPriorityIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToSkillsSkillIdPriorityIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  priorityId: z.number()
}).strict();

export default PrioritiesToSkillsSkillIdPriorityIdCompoundUniqueInputSchema;

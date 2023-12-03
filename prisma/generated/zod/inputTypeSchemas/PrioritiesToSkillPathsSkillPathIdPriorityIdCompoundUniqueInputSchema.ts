import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInput> = z.object({
  skillPathId: z.number(),
  priorityId: z.number()
}).strict();

export default PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema;

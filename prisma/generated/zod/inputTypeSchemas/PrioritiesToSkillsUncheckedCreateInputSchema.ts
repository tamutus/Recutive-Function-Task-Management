import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsUncheckedCreateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedCreateInput> = z.object({
  priorityId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsUncheckedCreateInputSchema;

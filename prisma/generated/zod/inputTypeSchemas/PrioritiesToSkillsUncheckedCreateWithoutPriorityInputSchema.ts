import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedCreateWithoutPriorityInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema;

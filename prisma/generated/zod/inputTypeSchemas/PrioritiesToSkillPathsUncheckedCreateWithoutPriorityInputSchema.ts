import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInput> = z.object({
  skillPathId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema;

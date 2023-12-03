import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedCreateWithoutSkillInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema;

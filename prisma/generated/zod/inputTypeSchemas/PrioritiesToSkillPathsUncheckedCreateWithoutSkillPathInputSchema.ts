import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema;

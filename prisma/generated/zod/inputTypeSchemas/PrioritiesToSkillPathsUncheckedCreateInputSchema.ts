import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToSkillPathsUncheckedCreateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUncheckedCreateInput> = z.object({
  skillPathId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToSkillPathsUncheckedCreateInputSchema;

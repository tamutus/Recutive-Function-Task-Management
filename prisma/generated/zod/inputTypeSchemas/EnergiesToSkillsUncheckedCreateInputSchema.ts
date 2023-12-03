import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsUncheckedCreateInputSchema: z.ZodType<Prisma.EnergiesToSkillsUncheckedCreateInput> = z.object({
  skillId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToSkillsUncheckedCreateInputSchema;

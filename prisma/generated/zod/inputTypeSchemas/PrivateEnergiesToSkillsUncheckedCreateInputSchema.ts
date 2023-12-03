import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUncheckedCreateInput> = z.object({
  skillId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsUncheckedCreateInputSchema;

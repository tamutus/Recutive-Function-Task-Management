import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsUncheckedCreateWithoutEnergyInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema;

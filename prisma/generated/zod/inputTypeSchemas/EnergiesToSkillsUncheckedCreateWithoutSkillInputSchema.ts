import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsUncheckedCreateWithoutSkillInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema;

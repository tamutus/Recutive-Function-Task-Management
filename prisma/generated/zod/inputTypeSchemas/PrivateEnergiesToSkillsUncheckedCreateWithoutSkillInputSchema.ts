import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema;

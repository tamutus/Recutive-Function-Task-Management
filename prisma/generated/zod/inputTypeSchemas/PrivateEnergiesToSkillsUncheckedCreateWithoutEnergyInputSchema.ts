import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema;

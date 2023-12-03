import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsCreateManyEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateManyEnergyInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToSkillsCreateManyEnergyInputSchema;

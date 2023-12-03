import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManyEnergyInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsCreateManyEnergyInputSchema;

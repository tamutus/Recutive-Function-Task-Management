import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsCreateManySkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManySkillInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsCreateManySkillInputSchema;

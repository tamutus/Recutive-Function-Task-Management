import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManyInput> = z.object({
  skillId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToSkillsCreateManyInputSchema;

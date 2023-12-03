import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsCreateManySkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateManySkillInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToSkillsCreateManySkillInputSchema;

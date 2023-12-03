import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  energyId: z.number()
}).strict();

export default EnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  energyId: z.number()
}).strict();

export default PrivateEnergiesToSkillsSkillIdEnergyIdCompoundUniqueInputSchema;

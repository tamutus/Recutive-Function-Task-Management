import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  workId: z.number()
}).strict();

export default EnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema;

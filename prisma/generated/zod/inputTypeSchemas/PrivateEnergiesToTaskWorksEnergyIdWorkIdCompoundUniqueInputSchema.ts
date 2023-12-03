import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  workId: z.number()
}).strict();

export default PrivateEnergiesToTaskWorksEnergyIdWorkIdCompoundUniqueInputSchema;

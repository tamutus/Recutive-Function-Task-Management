import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  energyId: z.number()
}).strict();

export default PrivateEnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema;

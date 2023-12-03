import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema;

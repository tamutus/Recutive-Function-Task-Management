import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedCreateInput> = z.object({
  taskId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedCreateInputSchema;

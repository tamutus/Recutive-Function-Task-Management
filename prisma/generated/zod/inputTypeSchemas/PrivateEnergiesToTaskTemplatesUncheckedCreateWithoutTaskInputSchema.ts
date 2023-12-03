import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema;

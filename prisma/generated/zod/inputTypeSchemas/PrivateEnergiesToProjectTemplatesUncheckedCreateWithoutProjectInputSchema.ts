import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema;

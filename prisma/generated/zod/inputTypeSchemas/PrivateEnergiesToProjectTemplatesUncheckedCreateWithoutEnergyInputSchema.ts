import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema;

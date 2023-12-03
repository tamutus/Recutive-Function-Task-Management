import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema;

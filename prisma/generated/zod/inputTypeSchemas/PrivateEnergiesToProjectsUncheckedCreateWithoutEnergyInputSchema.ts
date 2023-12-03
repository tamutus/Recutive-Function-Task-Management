import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInput> = z.object({
  projectId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema;

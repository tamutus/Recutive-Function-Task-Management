import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedCreateInputSchema;

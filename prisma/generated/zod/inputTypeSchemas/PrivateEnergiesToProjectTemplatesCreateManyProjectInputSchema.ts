import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyProjectInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema;

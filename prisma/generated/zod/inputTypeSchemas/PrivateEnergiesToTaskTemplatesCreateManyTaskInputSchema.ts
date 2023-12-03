import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyTaskInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema;

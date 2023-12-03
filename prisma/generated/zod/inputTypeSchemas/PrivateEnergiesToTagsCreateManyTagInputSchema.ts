import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsCreateManyTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyTagInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsCreateManyTagInputSchema;

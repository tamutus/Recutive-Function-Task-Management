import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedCreateWithoutTagInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema;

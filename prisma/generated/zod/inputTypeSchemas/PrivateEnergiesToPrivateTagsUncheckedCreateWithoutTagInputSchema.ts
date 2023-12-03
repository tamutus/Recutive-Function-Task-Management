import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsCreateManyTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyTagInput> = z.object({
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsCreateManyTagInputSchema;

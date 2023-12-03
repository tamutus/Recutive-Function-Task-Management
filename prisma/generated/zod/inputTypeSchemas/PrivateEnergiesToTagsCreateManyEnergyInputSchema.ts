import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyEnergyInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsCreateManyEnergyInputSchema;

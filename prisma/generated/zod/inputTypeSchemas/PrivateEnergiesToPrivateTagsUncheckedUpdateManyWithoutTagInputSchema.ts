import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInput> = z.object({
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema;

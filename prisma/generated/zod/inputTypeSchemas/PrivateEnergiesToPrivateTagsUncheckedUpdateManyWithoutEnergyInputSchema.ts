import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema;

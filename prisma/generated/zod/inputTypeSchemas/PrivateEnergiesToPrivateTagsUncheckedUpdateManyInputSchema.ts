import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToPrivateTagsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedUpdateManyInput> = z.object({
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedUpdateManyInputSchema;

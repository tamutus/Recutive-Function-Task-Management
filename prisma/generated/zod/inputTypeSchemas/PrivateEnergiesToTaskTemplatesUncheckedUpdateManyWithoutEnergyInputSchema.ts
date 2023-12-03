import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema';

export const PrivateEnergiesToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateWithoutTaskInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksUpdateWithoutTaskInputSchema;

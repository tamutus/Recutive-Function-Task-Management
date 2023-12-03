import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutTasksNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTasksNestedInputSchema';

export const EnergiesToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateWithoutTaskInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default EnergiesToTasksUpdateWithoutTaskInputSchema;

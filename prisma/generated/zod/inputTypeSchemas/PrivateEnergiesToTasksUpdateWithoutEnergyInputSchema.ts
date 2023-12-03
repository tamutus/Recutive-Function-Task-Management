import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema;

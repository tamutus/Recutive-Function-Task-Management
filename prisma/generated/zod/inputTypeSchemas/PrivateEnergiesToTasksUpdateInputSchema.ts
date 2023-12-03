import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema';
import { TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToTasksUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksUpdateInputSchema;

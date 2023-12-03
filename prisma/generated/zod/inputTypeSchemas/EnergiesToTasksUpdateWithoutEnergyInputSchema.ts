import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './TaskUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToTasksUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToTasksUpdateWithoutEnergyInputSchema;

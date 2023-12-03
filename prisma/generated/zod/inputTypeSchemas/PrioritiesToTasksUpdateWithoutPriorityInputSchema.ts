import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToTasksUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToTasksUpdateWithoutPriorityInputSchema;

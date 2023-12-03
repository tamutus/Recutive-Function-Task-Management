import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutTasksNestedInputSchema } from './PriorityUpdateOneRequiredWithoutTasksNestedInputSchema';
import { TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToTasksUpdateInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToTasksUpdateInputSchema;

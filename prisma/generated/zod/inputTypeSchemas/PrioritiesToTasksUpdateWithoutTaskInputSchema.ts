import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutTasksNestedInputSchema } from './PriorityUpdateOneRequiredWithoutTasksNestedInputSchema';

export const PrioritiesToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateWithoutTaskInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default PrioritiesToTasksUpdateWithoutTaskInputSchema;

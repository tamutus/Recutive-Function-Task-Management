import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutWorkNestedInputSchema } from './TaskUpdateOneRequiredWithoutWorkNestedInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema';

export const TaskWorkUpdateWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpdateWithoutEnergyChangesInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutWorkNestedInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema).optional()
}).strict();

export default TaskWorkUpdateWithoutEnergyChangesInputSchema;

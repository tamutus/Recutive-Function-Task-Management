import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutWorkNestedInputSchema } from './TaskUpdateOneRequiredWithoutWorkNestedInputSchema';
import { EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema } from './EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema';

export const TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpdateWithoutPrivateEnergyChangesInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutWorkNestedInputSchema).optional(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema).optional()
}).strict();

export default TaskWorkUpdateWithoutPrivateEnergyChangesInputSchema;

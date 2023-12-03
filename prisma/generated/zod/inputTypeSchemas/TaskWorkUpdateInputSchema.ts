import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutWorkNestedInputSchema } from './TaskUpdateOneRequiredWithoutWorkNestedInputSchema';
import { EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema } from './EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema';

export const TaskWorkUpdateInputSchema: z.ZodType<Prisma.TaskWorkUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutWorkNestedInputSchema).optional(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithoutWorkNestedInputSchema).optional()
}).strict();

export default TaskWorkUpdateInputSchema;

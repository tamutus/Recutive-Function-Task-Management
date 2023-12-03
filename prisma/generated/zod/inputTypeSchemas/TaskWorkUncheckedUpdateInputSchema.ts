import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema } from './EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema';

export const TaskWorkUncheckedUpdateInputSchema: z.ZodType<Prisma.TaskWorkUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkNestedInputSchema).optional()
}).strict();

export default TaskWorkUncheckedUpdateInputSchema;

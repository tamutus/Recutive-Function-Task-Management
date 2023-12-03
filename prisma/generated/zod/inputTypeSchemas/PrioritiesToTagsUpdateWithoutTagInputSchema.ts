import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutTagsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutTagsNestedInputSchema';

export const PrioritiesToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateWithoutTagInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default PrioritiesToTagsUpdateWithoutTagInputSchema;

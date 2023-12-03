import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema';
import { PriorityUpdateOneRequiredWithoutTagsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutTagsNestedInputSchema';

export const PrioritiesToTagsUpdateInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default PrioritiesToTagsUpdateInputSchema;

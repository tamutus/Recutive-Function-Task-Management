import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToTagsUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToTagsUpdateWithoutPriorityInputSchema;

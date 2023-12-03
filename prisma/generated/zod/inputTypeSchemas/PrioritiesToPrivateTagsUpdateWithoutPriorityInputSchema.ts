import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema;

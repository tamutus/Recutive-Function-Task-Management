import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema';
import { PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrioritiesToPrivateTagsUpdateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsUpdateInputSchema;

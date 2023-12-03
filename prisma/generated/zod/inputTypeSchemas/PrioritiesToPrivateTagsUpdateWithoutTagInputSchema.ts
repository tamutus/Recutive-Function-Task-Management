import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrioritiesToPrivateTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateWithoutTagInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsUpdateWithoutTagInputSchema;

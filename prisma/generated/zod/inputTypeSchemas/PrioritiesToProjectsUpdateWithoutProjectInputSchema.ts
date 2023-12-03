import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PrioritiesToProjectsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateWithoutProjectInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PrioritiesToProjectsUpdateWithoutProjectInputSchema;

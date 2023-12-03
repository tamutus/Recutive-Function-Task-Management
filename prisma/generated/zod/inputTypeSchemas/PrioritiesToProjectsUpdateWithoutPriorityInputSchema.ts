import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToProjectsUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToProjectsUpdateWithoutPriorityInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema';
import { PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PrioritiesToProjectsUpdateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PrioritiesToProjectsUpdateInputSchema;

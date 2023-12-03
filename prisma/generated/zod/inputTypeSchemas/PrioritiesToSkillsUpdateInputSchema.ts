import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToSkillsUpdateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillsUpdateInputSchema;

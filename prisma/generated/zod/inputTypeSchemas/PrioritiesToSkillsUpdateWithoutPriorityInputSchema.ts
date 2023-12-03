import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToSkillsUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillsUpdateWithoutPriorityInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema';

export const PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateWithoutPriorityInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema';
import { PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema';

export const PrioritiesToSkillPathsUpdateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutPrioritiesNestedInputSchema).optional(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsUpdateInputSchema;

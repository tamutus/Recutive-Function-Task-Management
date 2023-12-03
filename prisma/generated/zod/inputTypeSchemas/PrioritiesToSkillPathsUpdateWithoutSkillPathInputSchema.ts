import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema';

export const PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateWithoutSkillPathInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsUpdateWithoutSkillPathInputSchema;

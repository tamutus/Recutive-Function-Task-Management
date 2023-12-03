import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const PrioritiesToSkillsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateWithoutSkillInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priority: z.lazy(() => PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default PrioritiesToSkillsUpdateWithoutSkillInputSchema;

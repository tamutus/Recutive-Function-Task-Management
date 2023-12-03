import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToTaskTemplatesUncheckedUpdateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedUpdateInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedUpdateInputSchema;

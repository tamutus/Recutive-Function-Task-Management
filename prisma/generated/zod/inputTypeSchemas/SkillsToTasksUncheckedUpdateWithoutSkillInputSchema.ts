import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToTasksUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedUpdateWithoutSkillInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToTasksUncheckedUpdateWithoutSkillInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInputSchema;
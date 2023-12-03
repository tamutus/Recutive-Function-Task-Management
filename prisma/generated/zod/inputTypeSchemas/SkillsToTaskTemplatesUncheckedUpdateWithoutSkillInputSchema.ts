import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInput> = z.object({
  skillId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema;

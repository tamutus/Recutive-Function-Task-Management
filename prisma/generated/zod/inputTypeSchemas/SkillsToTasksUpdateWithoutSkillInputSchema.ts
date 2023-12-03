import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TaskUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const SkillsToTasksUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateWithoutSkillInput> = z.object({
  task: z.lazy(() => TaskUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default SkillsToTasksUpdateWithoutSkillInputSchema;

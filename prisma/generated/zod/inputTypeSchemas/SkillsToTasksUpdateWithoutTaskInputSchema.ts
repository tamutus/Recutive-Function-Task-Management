import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutTasksNestedInputSchema } from './SkillUpdateOneRequiredWithoutTasksNestedInputSchema';

export const SkillsToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateWithoutTaskInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default SkillsToTasksUpdateWithoutTaskInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TaskUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { SkillUpdateOneRequiredWithoutTasksNestedInputSchema } from './SkillUpdateOneRequiredWithoutTasksNestedInputSchema';

export const SkillsToTasksUpdateInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateInput> = z.object({
  task: z.lazy(() => TaskUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default SkillsToTasksUpdateInputSchema;

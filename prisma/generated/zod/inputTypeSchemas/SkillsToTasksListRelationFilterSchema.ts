import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereInputSchema } from './SkillsToTasksWhereInputSchema';

export const SkillsToTasksListRelationFilterSchema: z.ZodType<Prisma.SkillsToTasksListRelationFilter> = z.object({
  every: z.lazy(() => SkillsToTasksWhereInputSchema).optional(),
  some: z.lazy(() => SkillsToTasksWhereInputSchema).optional(),
  none: z.lazy(() => SkillsToTasksWhereInputSchema).optional()
}).strict();

export default SkillsToTasksListRelationFilterSchema;

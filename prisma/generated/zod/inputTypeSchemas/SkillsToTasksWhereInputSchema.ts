import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillsToTasksWhereInputSchema: z.ZodType<Prisma.SkillsToTasksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTasksWhereInputSchema),z.lazy(() => SkillsToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTasksWhereInputSchema),z.lazy(() => SkillsToTasksWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict();

export default SkillsToTasksWhereInputSchema;

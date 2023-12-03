import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema } from './SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema';
import { SkillsToTasksWhereInputSchema } from './SkillsToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillsToTasksWhereUniqueInputSchema: z.ZodType<Prisma.SkillsToTasksWhereUniqueInput> = z.object({
  taskId_skillId: z.lazy(() => SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema)
})
.and(z.object({
  taskId_skillId: z.lazy(() => SkillsToTasksTaskIdSkillIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillsToTasksWhereInputSchema),z.lazy(() => SkillsToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTasksWhereInputSchema),z.lazy(() => SkillsToTasksWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict());

export default SkillsToTasksWhereUniqueInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const SkillsToTasksScalarWhereInputSchema: z.ZodType<Prisma.SkillsToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToTasksScalarWhereInputSchema),z.lazy(() => SkillsToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTasksScalarWhereInputSchema),z.lazy(() => SkillsToTasksScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SkillsToTasksScalarWhereInputSchema;

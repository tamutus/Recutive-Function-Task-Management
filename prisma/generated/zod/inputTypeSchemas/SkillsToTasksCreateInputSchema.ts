import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutSkillsInputSchema } from './TaskCreateNestedOneWithoutSkillsInputSchema';
import { SkillCreateNestedOneWithoutTasksInputSchema } from './SkillCreateNestedOneWithoutTasksInputSchema';

export const SkillsToTasksCreateInputSchema: z.ZodType<Prisma.SkillsToTasksCreateInput> = z.object({
  task: z.lazy(() => TaskCreateNestedOneWithoutSkillsInputSchema),
  skill: z.lazy(() => SkillCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default SkillsToTasksCreateInputSchema;

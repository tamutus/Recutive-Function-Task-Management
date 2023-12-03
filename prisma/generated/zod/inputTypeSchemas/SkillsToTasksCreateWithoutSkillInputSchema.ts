import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutSkillsInputSchema } from './TaskCreateNestedOneWithoutSkillsInputSchema';

export const SkillsToTasksCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksCreateWithoutSkillInput> = z.object({
  task: z.lazy(() => TaskCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default SkillsToTasksCreateWithoutSkillInputSchema;

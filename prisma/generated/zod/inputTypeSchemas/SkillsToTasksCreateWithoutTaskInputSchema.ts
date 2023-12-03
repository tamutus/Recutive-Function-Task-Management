import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutTasksInputSchema } from './SkillCreateNestedOneWithoutTasksInputSchema';

export const SkillsToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksCreateWithoutTaskInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default SkillsToTasksCreateWithoutTaskInputSchema;

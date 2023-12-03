import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksSelectSchema } from '../inputTypeSchemas/SkillsToTasksSelectSchema';
import { SkillsToTasksIncludeSchema } from '../inputTypeSchemas/SkillsToTasksIncludeSchema';

export const SkillsToTasksArgsSchema: z.ZodType<Prisma.SkillsToTasksDefaultArgs> = z.object({
  select: z.lazy(() => SkillsToTasksSelectSchema).optional(),
  include: z.lazy(() => SkillsToTasksIncludeSchema).optional(),
}).strict();

export default SkillsToTasksArgsSchema;

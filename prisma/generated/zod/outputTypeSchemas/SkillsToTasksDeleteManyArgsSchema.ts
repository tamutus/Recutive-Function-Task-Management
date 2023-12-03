import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksWhereInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereInputSchema'

export const SkillsToTasksDeleteManyArgsSchema: z.ZodType<Prisma.SkillsToTasksDeleteManyArgs> = z.object({
  where: SkillsToTasksWhereInputSchema.optional(),
}).strict()

export default SkillsToTasksDeleteManyArgsSchema;

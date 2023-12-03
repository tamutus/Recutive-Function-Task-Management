import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksCreateManyInputSchema } from '../inputTypeSchemas/SkillsToTasksCreateManyInputSchema'

export const SkillsToTasksCreateManyArgsSchema: z.ZodType<Prisma.SkillsToTasksCreateManyArgs> = z.object({
  data: z.union([ SkillsToTasksCreateManyInputSchema,SkillsToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillsToTasksCreateManyArgsSchema;

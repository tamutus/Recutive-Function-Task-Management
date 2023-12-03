import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillsToTasksUpdateManyMutationInputSchema'
import { SkillsToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillsToTasksUncheckedUpdateManyInputSchema'
import { SkillsToTasksWhereInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereInputSchema'

export const SkillsToTasksUpdateManyArgsSchema: z.ZodType<Prisma.SkillsToTasksUpdateManyArgs> = z.object({
  data: z.union([ SkillsToTasksUpdateManyMutationInputSchema,SkillsToTasksUncheckedUpdateManyInputSchema ]),
  where: SkillsToTasksWhereInputSchema.optional(),
}).strict()

export default SkillsToTasksUpdateManyArgsSchema;

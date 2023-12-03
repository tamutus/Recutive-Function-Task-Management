import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesUpdateManyMutationInputSchema'
import { SkillsToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesUncheckedUpdateManyInputSchema'
import { SkillsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereInputSchema'

export const SkillsToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ SkillsToTaskTemplatesUpdateManyMutationInputSchema,SkillsToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: SkillsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default SkillsToTaskTemplatesUpdateManyArgsSchema;

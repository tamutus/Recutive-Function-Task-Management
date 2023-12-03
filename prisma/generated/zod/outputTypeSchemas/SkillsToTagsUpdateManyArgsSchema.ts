import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillsToTagsUpdateManyMutationInputSchema'
import { SkillsToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillsToTagsUncheckedUpdateManyInputSchema'
import { SkillsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereInputSchema'

export const SkillsToTagsUpdateManyArgsSchema: z.ZodType<Prisma.SkillsToTagsUpdateManyArgs> = z.object({
  data: z.union([ SkillsToTagsUpdateManyMutationInputSchema,SkillsToTagsUncheckedUpdateManyInputSchema ]),
  where: SkillsToTagsWhereInputSchema.optional(),
}).strict()

export default SkillsToTagsUpdateManyArgsSchema;

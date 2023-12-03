import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillPathsToTagsUpdateManyMutationInputSchema'
import { SkillPathsToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillPathsToTagsUncheckedUpdateManyInputSchema'
import { SkillPathsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereInputSchema'

export const SkillPathsToTagsUpdateManyArgsSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateManyArgs> = z.object({
  data: z.union([ SkillPathsToTagsUpdateManyMutationInputSchema,SkillPathsToTagsUncheckedUpdateManyInputSchema ]),
  where: SkillPathsToTagsWhereInputSchema.optional(),
}).strict()

export default SkillPathsToTagsUpdateManyArgsSchema;

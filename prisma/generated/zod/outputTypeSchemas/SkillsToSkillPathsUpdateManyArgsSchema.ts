import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsUpdateManyMutationInputSchema'
import { SkillsToSkillPathsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsUncheckedUpdateManyInputSchema'
import { SkillsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereInputSchema'

export const SkillsToSkillPathsUpdateManyArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateManyArgs> = z.object({
  data: z.union([ SkillsToSkillPathsUpdateManyMutationInputSchema,SkillsToSkillPathsUncheckedUpdateManyInputSchema ]),
  where: SkillsToSkillPathsWhereInputSchema.optional(),
}).strict()

export default SkillsToSkillPathsUpdateManyArgsSchema;

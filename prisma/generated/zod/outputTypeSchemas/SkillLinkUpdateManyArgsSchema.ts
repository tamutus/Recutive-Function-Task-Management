import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkUpdateManyMutationInputSchema } from '../inputTypeSchemas/SkillLinkUpdateManyMutationInputSchema'
import { SkillLinkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SkillLinkUncheckedUpdateManyInputSchema'
import { SkillLinkWhereInputSchema } from '../inputTypeSchemas/SkillLinkWhereInputSchema'

export const SkillLinkUpdateManyArgsSchema: z.ZodType<Prisma.SkillLinkUpdateManyArgs> = z.object({
  data: z.union([ SkillLinkUpdateManyMutationInputSchema,SkillLinkUncheckedUpdateManyInputSchema ]),
  where: SkillLinkWhereInputSchema.optional(),
}).strict()

export default SkillLinkUpdateManyArgsSchema;

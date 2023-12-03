import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereInputSchema'

export const SkillsToSkillPathsDeleteManyArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsDeleteManyArgs> = z.object({
  where: SkillsToSkillPathsWhereInputSchema.optional(),
}).strict()

export default SkillsToSkillPathsDeleteManyArgsSchema;

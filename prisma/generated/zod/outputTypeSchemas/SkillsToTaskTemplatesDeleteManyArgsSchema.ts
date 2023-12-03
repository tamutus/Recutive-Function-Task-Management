import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereInputSchema'

export const SkillsToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesDeleteManyArgs> = z.object({
  where: SkillsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default SkillsToTaskTemplatesDeleteManyArgsSchema;

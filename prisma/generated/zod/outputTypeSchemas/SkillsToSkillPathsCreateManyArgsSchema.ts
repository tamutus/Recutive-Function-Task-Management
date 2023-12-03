import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsCreateManyInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsCreateManyInputSchema'

export const SkillsToSkillPathsCreateManyArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManyArgs> = z.object({
  data: z.union([ SkillsToSkillPathsCreateManyInputSchema,SkillsToSkillPathsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SkillsToSkillPathsCreateManyArgsSchema;

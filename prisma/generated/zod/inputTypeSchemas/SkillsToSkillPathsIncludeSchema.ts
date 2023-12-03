import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"

export const SkillsToSkillPathsIncludeSchema: z.ZodType<Prisma.SkillsToSkillPathsInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
}).strict()

export default SkillsToSkillPathsIncludeSchema;

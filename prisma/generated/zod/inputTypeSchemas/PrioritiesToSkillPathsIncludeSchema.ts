import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"

export const PrioritiesToSkillPathsIncludeSchema: z.ZodType<Prisma.PrioritiesToSkillPathsInclude> = z.object({
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export default PrioritiesToSkillPathsIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const PrioritiesToSkillsIncludeSchema: z.ZodType<Prisma.PrioritiesToSkillsInclude> = z.object({
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default PrioritiesToSkillsIncludeSchema;

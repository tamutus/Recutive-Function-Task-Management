import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"

export const PrioritiesToSkillPathsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillPathsSelect> = z.object({
  skillPathId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export default PrioritiesToSkillPathsSelectSchema;

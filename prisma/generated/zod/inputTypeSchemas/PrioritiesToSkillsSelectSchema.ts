import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const PrioritiesToSkillsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillsSelect> = z.object({
  priorityId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  notes: z.boolean().optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default PrioritiesToSkillsSelectSchema;

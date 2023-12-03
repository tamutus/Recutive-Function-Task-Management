import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const SkillsToTaskTemplatesIncludeSchema: z.ZodType<Prisma.SkillsToTaskTemplatesInclude> = z.object({
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default SkillsToTaskTemplatesIncludeSchema;

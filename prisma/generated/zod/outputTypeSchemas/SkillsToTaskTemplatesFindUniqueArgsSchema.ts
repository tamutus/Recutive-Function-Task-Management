import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesIncludeSchema'
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereUniqueInputSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillsToTaskTemplatesSelectSchema: z.ZodType<Prisma.SkillsToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const SkillsToTaskTemplatesFindUniqueArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesFindUniqueArgs> = z.object({
  select: SkillsToTaskTemplatesSelectSchema.optional(),
  include: SkillsToTaskTemplatesIncludeSchema.optional(),
  where: SkillsToTaskTemplatesWhereUniqueInputSchema,
}).strict()

export default SkillsToTaskTemplatesFindUniqueArgsSchema;

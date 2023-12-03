import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesIncludeSchema'
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereUniqueInputSchema'
import { SkillsToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesCreateInputSchema'
import { SkillsToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesUncheckedCreateInputSchema'
import { SkillsToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesUpdateInputSchema'
import { SkillsToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesUncheckedUpdateInputSchema'
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

export const SkillsToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpsertArgs> = z.object({
  select: SkillsToTaskTemplatesSelectSchema.optional(),
  include: SkillsToTaskTemplatesIncludeSchema.optional(),
  where: SkillsToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ SkillsToTaskTemplatesCreateInputSchema,SkillsToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ SkillsToTaskTemplatesUpdateInputSchema,SkillsToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default SkillsToTaskTemplatesUpsertArgsSchema;

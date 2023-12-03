import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesIncludeSchema'
import { SkillsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereInputSchema'
import { SkillsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesOrderByWithRelationInputSchema'
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereUniqueInputSchema'
import { SkillsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesScalarFieldEnumSchema'
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

export const SkillsToTaskTemplatesFindManyArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesFindManyArgs> = z.object({
  select: SkillsToTaskTemplatesSelectSchema.optional(),
  include: SkillsToTaskTemplatesIncludeSchema.optional(),
  where: SkillsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTaskTemplatesOrderByWithRelationInputSchema.array(),SkillsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillsToTaskTemplatesScalarFieldEnumSchema,SkillsToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillsToTaskTemplatesFindManyArgsSchema;

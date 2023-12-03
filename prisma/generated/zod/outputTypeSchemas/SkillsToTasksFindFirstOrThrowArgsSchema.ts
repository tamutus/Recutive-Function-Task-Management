import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksIncludeSchema } from '../inputTypeSchemas/SkillsToTasksIncludeSchema'
import { SkillsToTasksWhereInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereInputSchema'
import { SkillsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTasksOrderByWithRelationInputSchema'
import { SkillsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereUniqueInputSchema'
import { SkillsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTasksScalarFieldEnumSchema'
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillsToTasksSelectSchema: z.ZodType<Prisma.SkillsToTasksSelect> = z.object({
  taskId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const SkillsToTasksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkillsToTasksFindFirstOrThrowArgs> = z.object({
  select: SkillsToTasksSelectSchema.optional(),
  include: SkillsToTasksIncludeSchema.optional(),
  where: SkillsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTasksOrderByWithRelationInputSchema.array(),SkillsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillsToTasksScalarFieldEnumSchema,SkillsToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillsToTasksFindFirstOrThrowArgsSchema;

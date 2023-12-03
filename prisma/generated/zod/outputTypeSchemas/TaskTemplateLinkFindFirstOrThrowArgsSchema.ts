import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkIncludeSchema } from '../inputTypeSchemas/TaskTemplateLinkIncludeSchema'
import { TaskTemplateLinkWhereInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereInputSchema'
import { TaskTemplateLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskTemplateLinkOrderByWithRelationInputSchema'
import { TaskTemplateLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereUniqueInputSchema'
import { TaskTemplateLinkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskTemplateLinkScalarFieldEnumSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskTemplateLinkSelectSchema: z.ZodType<Prisma.TaskTemplateLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export const TaskTemplateLinkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaskTemplateLinkFindFirstOrThrowArgs> = z.object({
  select: TaskTemplateLinkSelectSchema.optional(),
  include: TaskTemplateLinkIncludeSchema.optional(),
  where: TaskTemplateLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateLinkOrderByWithRelationInputSchema.array(),TaskTemplateLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskTemplateLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskTemplateLinkScalarFieldEnumSchema,TaskTemplateLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TaskTemplateLinkFindFirstOrThrowArgsSchema;

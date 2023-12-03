import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectsIncludeSchema'
import { PrivateTagsToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereInputSchema'
import { PrivateTagsToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsOrderByWithRelationInputSchema'
import { PrivateTagsToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereUniqueInputSchema'
import { PrivateTagsToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToProjectsScalarFieldEnumSchema'
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToProjectsSelectSchema: z.ZodType<Prisma.PrivateTagsToProjectsSelect> = z.object({
  tagId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToProjectsFindManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsFindManyArgs> = z.object({
  select: PrivateTagsToProjectsSelectSchema.optional(),
  include: PrivateTagsToProjectsIncludeSchema.optional(),
  where: PrivateTagsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectsOrderByWithRelationInputSchema.array(),PrivateTagsToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateTagsToProjectsScalarFieldEnumSchema,PrivateTagsToProjectsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateTagsToProjectsFindManyArgsSchema;

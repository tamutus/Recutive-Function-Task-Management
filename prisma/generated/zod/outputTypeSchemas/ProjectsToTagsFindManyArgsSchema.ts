import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsIncludeSchema } from '../inputTypeSchemas/ProjectsToTagsIncludeSchema'
import { ProjectsToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereInputSchema'
import { ProjectsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectsToTagsOrderByWithRelationInputSchema'
import { ProjectsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereUniqueInputSchema'
import { ProjectsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectsToTagsScalarFieldEnumSchema'
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectsToTagsSelectSchema: z.ZodType<Prisma.ProjectsToTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const ProjectsToTagsFindManyArgsSchema: z.ZodType<Prisma.ProjectsToTagsFindManyArgs> = z.object({
  select: ProjectsToTagsSelectSchema.optional(),
  include: ProjectsToTagsIncludeSchema.optional(),
  where: ProjectsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTagsOrderByWithRelationInputSchema.array(),ProjectsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectsToTagsScalarFieldEnumSchema,ProjectsToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProjectsToTagsFindManyArgsSchema;

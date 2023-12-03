import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsIncludeSchema'
import { ProjectTemplatesToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereInputSchema'
import { ProjectTemplatesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsOrderByWithRelationInputSchema'
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereUniqueInputSchema'
import { ProjectTemplatesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsScalarFieldEnumSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectTemplatesToTagsSelectSchema: z.ZodType<Prisma.ProjectTemplatesToTagsSelect> = z.object({
  projectId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  taggerId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const ProjectTemplatesToTagsFindManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsFindManyArgs> = z.object({
  select: ProjectTemplatesToTagsSelectSchema.optional(),
  include: ProjectTemplatesToTagsIncludeSchema.optional(),
  where: ProjectTemplatesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTagsOrderByWithRelationInputSchema.array(),ProjectTemplatesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectTemplatesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectTemplatesToTagsScalarFieldEnumSchema,ProjectTemplatesToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProjectTemplatesToTagsFindManyArgsSchema;

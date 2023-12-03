import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsIncludeSchema'
import { ProjectTemplatesToTagsUpdateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsUpdateInputSchema'
import { ProjectTemplatesToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsUncheckedUpdateInputSchema'
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereUniqueInputSchema'
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

export const ProjectTemplatesToTagsUpdateArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateArgs> = z.object({
  select: ProjectTemplatesToTagsSelectSchema.optional(),
  include: ProjectTemplatesToTagsIncludeSchema.optional(),
  data: z.union([ ProjectTemplatesToTagsUpdateInputSchema,ProjectTemplatesToTagsUncheckedUpdateInputSchema ]),
  where: ProjectTemplatesToTagsWhereUniqueInputSchema,
}).strict()

export default ProjectTemplatesToTagsUpdateArgsSchema;

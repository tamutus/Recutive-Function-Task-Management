import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsIncludeSchema'
import { ProjectTemplatesToTagsCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsCreateInputSchema'
import { ProjectTemplatesToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsUncheckedCreateInputSchema'
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

export const ProjectTemplatesToTagsCreateArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateArgs> = z.object({
  select: ProjectTemplatesToTagsSelectSchema.optional(),
  include: ProjectTemplatesToTagsIncludeSchema.optional(),
  data: z.union([ ProjectTemplatesToTagsCreateInputSchema,ProjectTemplatesToTagsUncheckedCreateInputSchema ]),
}).strict()

export default ProjectTemplatesToTagsCreateArgsSchema;

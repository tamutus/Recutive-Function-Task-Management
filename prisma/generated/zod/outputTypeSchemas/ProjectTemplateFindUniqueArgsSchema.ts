import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateIncludeSchema } from '../inputTypeSchemas/ProjectTemplateIncludeSchema'
import { ProjectTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereUniqueInputSchema'
import { PersonsToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PersonsToProjectTemplatesFindManyArgsSchema"
import { EnergiesToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToProjectTemplatesFindManyArgsSchema"
import { ProjectTemplatesToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectTemplatesToTagsFindManyArgsSchema"
import { PrivateEnergiesToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToProjectTemplatesFindManyArgsSchema"
import { PrivateTagsToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectTemplatesFindManyArgsSchema"
import { ProjectTemplatesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/ProjectTemplatesToTaskTemplatesFindManyArgsSchema"
import { ProjectFindManyArgsSchema } from "../outputTypeSchemas/ProjectFindManyArgsSchema"
import { ProjectTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectTemplateSelectSchema: z.ZodType<Prisma.ProjectTemplateSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  completionRequirements: z.boolean().optional(),
  image: z.boolean().optional(),
  color: z.boolean().optional(),
  links: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => PersonsToProjectTemplatesFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToProjectTemplatesFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => ProjectTemplatesToTagsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToProjectTemplatesFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateTagsToProjectTemplatesFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => ProjectTemplatesToTaskTemplatesFindManyArgsSchema)]).optional(),
  implementations: z.union([z.boolean(),z.lazy(() => ProjectFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProjectTemplateFindUniqueArgsSchema: z.ZodType<Prisma.ProjectTemplateFindUniqueArgs> = z.object({
  select: ProjectTemplateSelectSchema.optional(),
  include: ProjectTemplateIncludeSchema.optional(),
  where: ProjectTemplateWhereUniqueInputSchema,
}).strict()

export default ProjectTemplateFindUniqueArgsSchema;

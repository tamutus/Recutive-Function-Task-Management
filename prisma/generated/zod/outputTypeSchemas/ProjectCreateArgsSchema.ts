import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectIncludeSchema } from '../inputTypeSchemas/ProjectIncludeSchema'
import { ProjectCreateInputSchema } from '../inputTypeSchemas/ProjectCreateInputSchema'
import { ProjectUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectUncheckedCreateInputSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PersonsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToProjectsFindManyArgsSchema"
import { ProjectsToTasksFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTasksFindManyArgsSchema"
import { PrioritiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToProjectsFindManyArgsSchema"
import { EnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToProjectsFindManyArgsSchema"
import { ProjectsToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTagsFindManyArgsSchema"
import { PrivateEnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToProjectsFindManyArgsSchema"
import { PrivateTagsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectsFindManyArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  completionRequirements: z.boolean().optional(),
  color: z.boolean().optional(),
  links: z.boolean().optional(),
  templateId: z.boolean().optional(),
  public: z.boolean().optional(),
  publicAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  startAt: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  dueAt: z.boolean().optional(),
  endedAt: z.boolean().optional(),
  template: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  volunteers: z.union([z.boolean(),z.lazy(() => PersonsToProjectsFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => ProjectsToTasksFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToProjectsFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToProjectsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => ProjectsToTagsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToProjectsFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateTagsToProjectsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProjectCreateArgsSchema: z.ZodType<Prisma.ProjectCreateArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  data: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
}).strict()

export default ProjectCreateArgsSchema;
import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PersonsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToProjectsFindManyArgsSchema"
import { ProjectsToTasksFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTasksFindManyArgsSchema"
import { PrioritiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToProjectsFindManyArgsSchema"
import { EnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToProjectsFindManyArgsSchema"
import { ProjectsToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTagsFindManyArgsSchema"
import { PrivateEnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToProjectsFindManyArgsSchema"
import { PrivateTagsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectsFindManyArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z.object({
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

export default ProjectIncludeSchema;

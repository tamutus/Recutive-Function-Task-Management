import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectTemplatesToTagsFindManyArgsSchema"
import { TagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/TagsToTaskTemplatesFindManyArgsSchema"
import { PrioritiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTagsFindManyArgsSchema"
import { EnergiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTagsFindManyArgsSchema"
import { PrivateEnergiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTagsFindManyArgsSchema"
import { SkillsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTagsFindManyArgsSchema"
import { SkillPathsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillPathsToTagsFindManyArgsSchema"
import { PersonsToTagsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToTagsFindManyArgsSchema"
import { ProjectsToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTagsFindManyArgsSchema"
import { TagsToTasksFindManyArgsSchema } from "../outputTypeSchemas/TagsToTasksFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  nsfw: z.boolean().optional(),
  color: z.boolean().optional(),
  projectTemplates: z.union([z.boolean(),z.lazy(() => ProjectTemplatesToTagsFindManyArgsSchema)]).optional(),
  taskTemplates: z.union([z.boolean(),z.lazy(() => TagsToTaskTemplatesFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToTagsFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToTagsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTagsFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillsToTagsFindManyArgsSchema)]).optional(),
  paths: z.union([z.boolean(),z.lazy(() => SkillPathsToTagsFindManyArgsSchema)]).optional(),
  followers: z.union([z.boolean(),z.lazy(() => PersonsToTagsFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsToTagsFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TagsToTasksFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagSelectSchema;

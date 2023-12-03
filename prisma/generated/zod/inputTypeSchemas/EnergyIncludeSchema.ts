import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToProjectTemplatesFindManyArgsSchema"
import { EnergiesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTaskTemplatesFindManyArgsSchema"
import { EnergiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToSkillsFindManyArgsSchema"
import { EnergiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTagsFindManyArgsSchema"
import { EnergiesToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsFindManyArgsSchema"
import { EnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToProjectsFindManyArgsSchema"
import { EnergiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTasksFindManyArgsSchema"
import { EnergiesToTaskWorksFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTaskWorksFindManyArgsSchema"
import { EnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToPrivateTagsFindManyArgsSchema"
import { EnergyCountOutputTypeArgsSchema } from "../outputTypeSchemas/EnergyCountOutputTypeArgsSchema"

export const EnergyIncludeSchema: z.ZodType<Prisma.EnergyInclude> = z.object({
  projectTemplates: z.union([z.boolean(),z.lazy(() => EnergiesToProjectTemplatesFindManyArgsSchema)]).optional(),
  taskTemplates: z.union([z.boolean(),z.lazy(() => EnergiesToTaskTemplatesFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => EnergiesToSkillsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => EnergiesToTagsFindManyArgsSchema)]).optional(),
  experiences: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => EnergiesToProjectsFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => EnergiesToTasksFindManyArgsSchema)]).optional(),
  taskWork: z.union([z.boolean(),z.lazy(() => EnergiesToTaskWorksFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => EnergiesToPrivateTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EnergyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default EnergyIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { PrivateEnergiesToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToProjectTemplatesFindManyArgsSchema"
import { PrivateEnergiesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTaskTemplatesFindManyArgsSchema"
import { PrivateEnergiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToSkillsFindManyArgsSchema"
import { PrivateEnergiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTagsFindManyArgsSchema"
import { PrivateEnergiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToProjectsFindManyArgsSchema"
import { PrivateEnergiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTasksFindManyArgsSchema"
import { PrivateEnergiesToTaskWorksFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTaskWorksFindManyArgsSchema"
import { PrivateEnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToPrivateTagsFindManyArgsSchema"
import { PrivateEnergyCountOutputTypeArgsSchema } from "../outputTypeSchemas/PrivateEnergyCountOutputTypeArgsSchema"

export const PrivateEnergySelectSchema: z.ZodType<Prisma.PrivateEnergySelect> = z.object({
  personId: z.boolean().optional(),
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  unit: z.boolean().optional(),
  info: z.boolean().optional(),
  color: z.boolean().optional(),
  music: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  projectTemplates: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToProjectTemplatesFindManyArgsSchema)]).optional(),
  taskTemplates: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTaskTemplatesFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToSkillsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTagsFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToProjectsFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTasksFindManyArgsSchema)]).optional(),
  taskWork: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTaskWorksFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToPrivateTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PrivateEnergyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PrivateEnergySelectSchema;

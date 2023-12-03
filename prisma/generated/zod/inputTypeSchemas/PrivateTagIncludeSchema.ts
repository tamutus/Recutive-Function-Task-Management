import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { PrivateTagsToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectTemplatesFindManyArgsSchema"
import { PrivateTagsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectsFindManyArgsSchema"
import { PrivateTagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTaskTemplatesFindManyArgsSchema"
import { PrivateTagsToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTasksFindManyArgsSchema"
import { PrioritiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToPrivateTagsFindManyArgsSchema"
import { EnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToPrivateTagsFindManyArgsSchema"
import { PrivateEnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToPrivateTagsFindManyArgsSchema"
import { PrivateTagCountOutputTypeArgsSchema } from "../outputTypeSchemas/PrivateTagCountOutputTypeArgsSchema"

export const PrivateTagIncludeSchema: z.ZodType<Prisma.PrivateTagInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  projectTemplates: z.union([z.boolean(),z.lazy(() => PrivateTagsToProjectTemplatesFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => PrivateTagsToProjectsFindManyArgsSchema)]).optional(),
  taskTemplates: z.union([z.boolean(),z.lazy(() => PrivateTagsToTaskTemplatesFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => PrivateTagsToTasksFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToPrivateTagsFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToPrivateTagsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToPrivateTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PrivateTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PrivateTagIncludeSchema;

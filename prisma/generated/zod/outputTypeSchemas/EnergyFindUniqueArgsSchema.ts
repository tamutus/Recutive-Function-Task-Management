import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyIncludeSchema } from '../inputTypeSchemas/EnergyIncludeSchema'
import { EnergyWhereUniqueInputSchema } from '../inputTypeSchemas/EnergyWhereUniqueInputSchema'
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
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergySelectSchema: z.ZodType<Prisma.EnergySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  unit: z.boolean().optional(),
  info: z.boolean().optional(),
  color: z.boolean().optional(),
  music: z.boolean().optional(),
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

export const EnergyFindUniqueArgsSchema: z.ZodType<Prisma.EnergyFindUniqueArgs> = z.object({
  select: EnergySelectSchema.optional(),
  include: EnergyIncludeSchema.optional(),
  where: EnergyWhereUniqueInputSchema,
}).strict()

export default EnergyFindUniqueArgsSchema;

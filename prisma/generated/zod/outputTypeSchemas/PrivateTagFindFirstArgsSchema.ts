import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagIncludeSchema } from '../inputTypeSchemas/PrivateTagIncludeSchema'
import { PrivateTagWhereInputSchema } from '../inputTypeSchemas/PrivateTagWhereInputSchema'
import { PrivateTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagOrderByWithRelationInputSchema'
import { PrivateTagWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagWhereUniqueInputSchema'
import { PrivateTagScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { PrivateTagsToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectTemplatesFindManyArgsSchema"
import { PrivateTagsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToProjectsFindManyArgsSchema"
import { PrivateTagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTaskTemplatesFindManyArgsSchema"
import { PrivateTagsToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTasksFindManyArgsSchema"
import { PrioritiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToPrivateTagsFindManyArgsSchema"
import { EnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToPrivateTagsFindManyArgsSchema"
import { PrivateEnergiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToPrivateTagsFindManyArgsSchema"
import { PrivateTagCountOutputTypeArgsSchema } from "../outputTypeSchemas/PrivateTagCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagSelectSchema: z.ZodType<Prisma.PrivateTagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  nsfw: z.boolean().optional(),
  color: z.boolean().optional(),
  personId: z.boolean().optional(),
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

export const PrivateTagFindFirstArgsSchema: z.ZodType<Prisma.PrivateTagFindFirstArgs> = z.object({
  select: PrivateTagSelectSchema.optional(),
  include: PrivateTagIncludeSchema.optional(),
  where: PrivateTagWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagOrderByWithRelationInputSchema.array(),PrivateTagOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateTagScalarFieldEnumSchema,PrivateTagScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateTagFindFirstArgsSchema;

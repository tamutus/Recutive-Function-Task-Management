import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillIncludeSchema } from '../inputTypeSchemas/SkillIncludeSchema'
import { SkillWhereInputSchema } from '../inputTypeSchemas/SkillWhereInputSchema'
import { SkillOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillOrderByWithRelationInputSchema'
import { SkillWhereUniqueInputSchema } from '../inputTypeSchemas/SkillWhereUniqueInputSchema'
import { SkillScalarFieldEnumSchema } from '../inputTypeSchemas/SkillScalarFieldEnumSchema'
import { SkillsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToSkillPathsFindManyArgsSchema"
import { SkillLinkFindManyArgsSchema } from "../outputTypeSchemas/SkillLinkFindManyArgsSchema"
import { SkillsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTaskTemplatesFindManyArgsSchema"
import { SkillsToTasksFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTasksFindManyArgsSchema"
import { PersonsToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToSkillsFindManyArgsSchema"
import { EnergiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToSkillsFindManyArgsSchema"
import { PrivateEnergiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToSkillsFindManyArgsSchema"
import { PrioritiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillsFindManyArgsSchema"
import { SkillsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTagsFindManyArgsSchema"
import { SkillCountOutputTypeArgsSchema } from "../outputTypeSchemas/SkillCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillSelectSchema: z.ZodType<Prisma.SkillSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  paths: z.union([z.boolean(),z.lazy(() => SkillsToSkillPathsFindManyArgsSchema)]).optional(),
  precedes: z.union([z.boolean(),z.lazy(() => SkillLinkFindManyArgsSchema)]).optional(),
  succeeds: z.union([z.boolean(),z.lazy(() => SkillLinkFindManyArgsSchema)]).optional(),
  taskTemplates: z.union([z.boolean(),z.lazy(() => SkillsToTaskTemplatesFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => SkillsToTasksFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => PersonsToSkillsFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToSkillsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToSkillsFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SkillsToTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SkillFindFirstArgsSchema: z.ZodType<Prisma.SkillFindFirstArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillScalarFieldEnumSchema,SkillScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillFindFirstArgsSchema;
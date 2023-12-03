import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonIncludeSchema } from '../inputTypeSchemas/PersonIncludeSchema'
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'
import { PersonOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonOrderByWithRelationInputSchema'
import { PersonWhereUniqueInputSchema } from '../inputTypeSchemas/PersonWhereUniqueInputSchema'
import { PersonScalarFieldEnumSchema } from '../inputTypeSchemas/PersonScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PriorityFindManyArgsSchema } from "../outputTypeSchemas/PriorityFindManyArgsSchema"
import { PersonsToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToProjectsFindManyArgsSchema"
import { TaskFindManyArgsSchema } from "../outputTypeSchemas/TaskFindManyArgsSchema"
import { PersonsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToSkillPathsFindManyArgsSchema"
import { PersonsToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToSkillsFindManyArgsSchema"
import { PrivateEnergyFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergyFindManyArgsSchema"
import { PrivateTagFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagFindManyArgsSchema"
import { EnergiesToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsFindManyArgsSchema"
import { PersonsToProjectTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PersonsToProjectTemplatesFindManyArgsSchema"
import { PersonsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PersonsToTaskTemplatesFindManyArgsSchema"
import { PersonsToTagsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToTagsFindManyArgsSchema"
import { ProjectTemplatesToTagsFindManyArgsSchema } from "../outputTypeSchemas/ProjectTemplatesToTagsFindManyArgsSchema"
import { TagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/TagsToTaskTemplatesFindManyArgsSchema"
import { SkillsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTagsFindManyArgsSchema"
import { SkillPathsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillPathsToTagsFindManyArgsSchema"
import { EnergiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTagsFindManyArgsSchema"
import { PersonCountOutputTypeArgsSchema } from "../outputTypeSchemas/PersonCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  bio: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PriorityFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => PersonsToProjectsFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  skillPaths: z.union([z.boolean(),z.lazy(() => PersonsToSkillPathsFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => PersonsToSkillsFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergyFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateTagFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsFindManyArgsSchema)]).optional(),
  editedProjects: z.union([z.boolean(),z.lazy(() => PersonsToProjectTemplatesFindManyArgsSchema)]).optional(),
  editedTasks: z.union([z.boolean(),z.lazy(() => PersonsToTaskTemplatesFindManyArgsSchema)]).optional(),
  tagFollows: z.union([z.boolean(),z.lazy(() => PersonsToTagsFindManyArgsSchema)]).optional(),
  projectTags: z.union([z.boolean(),z.lazy(() => ProjectTemplatesToTagsFindManyArgsSchema)]).optional(),
  taskTags: z.union([z.boolean(),z.lazy(() => TagsToTaskTemplatesFindManyArgsSchema)]).optional(),
  skillTags: z.union([z.boolean(),z.lazy(() => SkillsToTagsFindManyArgsSchema)]).optional(),
  skillPathTags: z.union([z.boolean(),z.lazy(() => SkillPathsToTagsFindManyArgsSchema)]).optional(),
  energyTags: z.union([z.boolean(),z.lazy(() => EnergiesToTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonFindFirstOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonScalarFieldEnumSchema,PersonScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonFindFirstOrThrowArgsSchema;

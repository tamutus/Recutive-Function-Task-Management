import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PriorityListRelationFilterSchema } from './PriorityListRelationFilterSchema';
import { PersonsToProjectsListRelationFilterSchema } from './PersonsToProjectsListRelationFilterSchema';
import { TaskListRelationFilterSchema } from './TaskListRelationFilterSchema';
import { PersonsToSkillPathsListRelationFilterSchema } from './PersonsToSkillPathsListRelationFilterSchema';
import { PersonsToSkillsListRelationFilterSchema } from './PersonsToSkillsListRelationFilterSchema';
import { PrivateEnergyListRelationFilterSchema } from './PrivateEnergyListRelationFilterSchema';
import { PrivateTagListRelationFilterSchema } from './PrivateTagListRelationFilterSchema';
import { EnergiesToPersonsListRelationFilterSchema } from './EnergiesToPersonsListRelationFilterSchema';
import { PersonsToProjectTemplatesListRelationFilterSchema } from './PersonsToProjectTemplatesListRelationFilterSchema';
import { PersonsToTaskTemplatesListRelationFilterSchema } from './PersonsToTaskTemplatesListRelationFilterSchema';
import { PersonsToTagsListRelationFilterSchema } from './PersonsToTagsListRelationFilterSchema';
import { ProjectTemplatesToTagsListRelationFilterSchema } from './ProjectTemplatesToTagsListRelationFilterSchema';
import { TagsToTaskTemplatesListRelationFilterSchema } from './TagsToTaskTemplatesListRelationFilterSchema';
import { SkillsToTagsListRelationFilterSchema } from './SkillsToTagsListRelationFilterSchema';
import { SkillPathsToTagsListRelationFilterSchema } from './SkillPathsToTagsListRelationFilterSchema';
import { EnergiesToTagsListRelationFilterSchema } from './EnergiesToTagsListRelationFilterSchema';

export const PersonWhereInputSchema: z.ZodType<Prisma.PersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  priorities: z.lazy(() => PriorityListRelationFilterSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  skillPaths: z.lazy(() => PersonsToSkillPathsListRelationFilterSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergyListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateTagListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsListRelationFilterSchema).optional(),
  editedProjects: z.lazy(() => PersonsToProjectTemplatesListRelationFilterSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesListRelationFilterSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsListRelationFilterSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsListRelationFilterSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesListRelationFilterSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsListRelationFilterSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsListRelationFilterSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsListRelationFilterSchema).optional()
}).strict();

export default PersonWhereInputSchema;

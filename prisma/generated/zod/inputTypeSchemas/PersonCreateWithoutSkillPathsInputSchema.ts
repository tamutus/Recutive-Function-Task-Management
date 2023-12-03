import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonInputSchema } from './UserCreateNestedOneWithoutPersonInputSchema';
import { PriorityCreateNestedManyWithoutPersonInputSchema } from './PriorityCreateNestedManyWithoutPersonInputSchema';
import { PersonsToProjectsCreateNestedManyWithoutPersonInputSchema } from './PersonsToProjectsCreateNestedManyWithoutPersonInputSchema';
import { TaskCreateNestedManyWithoutPersonInputSchema } from './TaskCreateNestedManyWithoutPersonInputSchema';
import { PersonsToSkillsCreateNestedManyWithoutPersonInputSchema } from './PersonsToSkillsCreateNestedManyWithoutPersonInputSchema';
import { PrivateEnergyCreateNestedManyWithoutPersonInputSchema } from './PrivateEnergyCreateNestedManyWithoutPersonInputSchema';
import { PrivateTagCreateNestedManyWithoutPersonInputSchema } from './PrivateTagCreateNestedManyWithoutPersonInputSchema';
import { EnergiesToPersonsCreateNestedManyWithoutPersonInputSchema } from './EnergiesToPersonsCreateNestedManyWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateNestedManyWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateNestedManyWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateNestedManyWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateNestedManyWithoutPersonInputSchema';
import { PersonsToTagsCreateNestedManyWithoutFollowerInputSchema } from './PersonsToTagsCreateNestedManyWithoutFollowerInputSchema';
import { ProjectTemplatesToTagsCreateNestedManyWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateNestedManyWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateNestedManyWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateNestedManyWithoutTaggerInputSchema';
import { SkillsToTagsCreateNestedManyWithoutTaggerInputSchema } from './SkillsToTagsCreateNestedManyWithoutTaggerInputSchema';
import { SkillPathsToTagsCreateNestedManyWithoutTaggerInputSchema } from './SkillPathsToTagsCreateNestedManyWithoutTaggerInputSchema';
import { EnergiesToTagsCreateNestedManyWithoutTaggerInputSchema } from './EnergiesToTagsCreateNestedManyWithoutTaggerInputSchema';

export const PersonCreateWithoutSkillPathsInputSchema: z.ZodType<Prisma.PersonCreateWithoutSkillPathsInput> = z.object({
  username: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutPersonInputSchema).optional(),
  priorities: z.lazy(() => PriorityCreateNestedManyWithoutPersonInputSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsCreateNestedManyWithoutPersonInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutPersonInputSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsCreateNestedManyWithoutPersonInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergyCreateNestedManyWithoutPersonInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagCreateNestedManyWithoutPersonInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsCreateNestedManyWithoutPersonInputSchema).optional(),
  editedProjects: z.lazy(() => PersonsToProjectTemplatesCreateNestedManyWithoutPersonInputSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesCreateNestedManyWithoutPersonInputSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsCreateNestedManyWithoutFollowerInputSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsCreateNestedManyWithoutTaggerInputSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesCreateNestedManyWithoutTaggerInputSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsCreateNestedManyWithoutTaggerInputSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsCreateNestedManyWithoutTaggerInputSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsCreateNestedManyWithoutTaggerInputSchema).optional()
}).strict();

export default PersonCreateWithoutSkillPathsInputSchema;

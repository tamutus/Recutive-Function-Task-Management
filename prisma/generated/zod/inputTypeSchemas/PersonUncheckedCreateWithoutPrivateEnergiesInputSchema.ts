import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutPersonInputSchema } from './UserUncheckedCreateNestedOneWithoutPersonInputSchema';
import { PriorityUncheckedCreateNestedManyWithoutPersonInputSchema } from './PriorityUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInputSchema } from './PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { TaskUncheckedCreateNestedManyWithoutPersonInputSchema } from './TaskUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedCreateNestedManyWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedCreateNestedManyWithoutPersonInputSchema } from './PersonsToSkillsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PrivateTagUncheckedCreateNestedManyWithoutPersonInputSchema } from './PrivateTagUncheckedCreateNestedManyWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema';
import { PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInputSchema } from './PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInputSchema';
import { SkillsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema } from './SkillsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema';
import { SkillPathsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema } from './SkillPathsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema';

export const PersonUncheckedCreateWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutPrivateEnergiesInput> = z.object({
  id: z.number().int().optional(),
  username: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutPersonInputSchema).optional(),
  priorities: z.lazy(() => PriorityUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  skillPaths: z.lazy(() => PersonsToSkillPathsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  editedProjects: z.lazy(() => PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInputSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaggerInputSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsUncheckedCreateNestedManyWithoutTaggerInputSchema).optional()
}).strict();

export default PersonUncheckedCreateWithoutPrivateEnergiesInputSchema;

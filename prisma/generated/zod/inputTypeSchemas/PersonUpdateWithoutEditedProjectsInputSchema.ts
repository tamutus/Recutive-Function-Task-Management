import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutPersonNestedInputSchema } from './UserUpdateOneWithoutPersonNestedInputSchema';
import { PriorityUpdateManyWithoutPersonNestedInputSchema } from './PriorityUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToProjectsUpdateManyWithoutPersonNestedInputSchema } from './PersonsToProjectsUpdateManyWithoutPersonNestedInputSchema';
import { TaskUpdateManyWithoutPersonNestedInputSchema } from './TaskUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToSkillPathsUpdateManyWithoutPersonNestedInputSchema } from './PersonsToSkillPathsUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToSkillsUpdateManyWithoutPersonNestedInputSchema } from './PersonsToSkillsUpdateManyWithoutPersonNestedInputSchema';
import { PrivateEnergyUpdateManyWithoutPersonNestedInputSchema } from './PrivateEnergyUpdateManyWithoutPersonNestedInputSchema';
import { PrivateTagUpdateManyWithoutPersonNestedInputSchema } from './PrivateTagUpdateManyWithoutPersonNestedInputSchema';
import { EnergiesToPersonsUpdateManyWithoutPersonNestedInputSchema } from './EnergiesToPersonsUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInputSchema } from './PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToTagsUpdateManyWithoutFollowerNestedInputSchema } from './PersonsToTagsUpdateManyWithoutFollowerNestedInputSchema';
import { ProjectTemplatesToTagsUpdateManyWithoutTaggerNestedInputSchema } from './ProjectTemplatesToTagsUpdateManyWithoutTaggerNestedInputSchema';
import { TagsToTaskTemplatesUpdateManyWithoutTaggerNestedInputSchema } from './TagsToTaskTemplatesUpdateManyWithoutTaggerNestedInputSchema';
import { SkillsToTagsUpdateManyWithoutTaggerNestedInputSchema } from './SkillsToTagsUpdateManyWithoutTaggerNestedInputSchema';
import { SkillPathsToTagsUpdateManyWithoutTaggerNestedInputSchema } from './SkillPathsToTagsUpdateManyWithoutTaggerNestedInputSchema';
import { EnergiesToTagsUpdateManyWithoutTaggerNestedInputSchema } from './EnergiesToTagsUpdateManyWithoutTaggerNestedInputSchema';

export const PersonUpdateWithoutEditedProjectsInputSchema: z.ZodType<Prisma.PersonUpdateWithoutEditedProjectsInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutPersonNestedInputSchema).optional(),
  priorities: z.lazy(() => PriorityUpdateManyWithoutPersonNestedInputSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsUpdateManyWithoutPersonNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutPersonNestedInputSchema).optional(),
  skillPaths: z.lazy(() => PersonsToSkillPathsUpdateManyWithoutPersonNestedInputSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsUpdateManyWithoutPersonNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergyUpdateManyWithoutPersonNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagUpdateManyWithoutPersonNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsUpdateManyWithoutPersonNestedInputSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInputSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsUpdateManyWithoutFollowerNestedInputSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsUpdateManyWithoutTaggerNestedInputSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesUpdateManyWithoutTaggerNestedInputSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsUpdateManyWithoutTaggerNestedInputSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsUpdateManyWithoutTaggerNestedInputSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsUpdateManyWithoutTaggerNestedInputSchema).optional()
}).strict();

export default PersonUpdateWithoutEditedProjectsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PriorityUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PriorityUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { TaskUncheckedUpdateManyWithoutPersonNestedInputSchema } from './TaskUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToSkillPathsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PersonsToSkillPathsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PrivateTagUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PrivateTagUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInputSchema } from './PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema';
import { EnergiesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema } from './EnergiesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema';

export const PersonUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  priorities: z.lazy(() => PriorityUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  skillPaths: z.lazy(() => PersonsToSkillPathsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  editedProjects: z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsUncheckedUpdateManyWithoutFollowerNestedInputSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInputSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsUncheckedUpdateManyWithoutTaggerNestedInputSchema).optional()
}).strict();

export default PersonUncheckedUpdateWithoutUserInputSchema;

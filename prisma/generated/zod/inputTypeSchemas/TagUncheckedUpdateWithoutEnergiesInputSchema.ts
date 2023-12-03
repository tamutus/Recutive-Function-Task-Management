import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PersonsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './PersonsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { ProjectsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './ProjectsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { TagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema } from './TagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema';

export const TagUncheckedUpdateWithoutEnergiesInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutEnergiesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nsfw: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  skills: z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  paths: z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  followers: z.lazy(() => PersonsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  tasks: z.lazy(() => TagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default TagUncheckedUpdateWithoutEnergiesInputSchema;
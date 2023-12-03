import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ProjectTemplatesToTagsUpdateManyWithoutTagNestedInputSchema } from './ProjectTemplatesToTagsUpdateManyWithoutTagNestedInputSchema';
import { PrioritiesToTagsUpdateManyWithoutTagNestedInputSchema } from './PrioritiesToTagsUpdateManyWithoutTagNestedInputSchema';
import { EnergiesToTagsUpdateManyWithoutTagNestedInputSchema } from './EnergiesToTagsUpdateManyWithoutTagNestedInputSchema';
import { PrivateEnergiesToTagsUpdateManyWithoutTagNestedInputSchema } from './PrivateEnergiesToTagsUpdateManyWithoutTagNestedInputSchema';
import { SkillsToTagsUpdateManyWithoutTagNestedInputSchema } from './SkillsToTagsUpdateManyWithoutTagNestedInputSchema';
import { SkillPathsToTagsUpdateManyWithoutTagNestedInputSchema } from './SkillPathsToTagsUpdateManyWithoutTagNestedInputSchema';
import { PersonsToTagsUpdateManyWithoutTagNestedInputSchema } from './PersonsToTagsUpdateManyWithoutTagNestedInputSchema';
import { ProjectsToTagsUpdateManyWithoutTagNestedInputSchema } from './ProjectsToTagsUpdateManyWithoutTagNestedInputSchema';
import { TagsToTasksUpdateManyWithoutTagNestedInputSchema } from './TagsToTasksUpdateManyWithoutTagNestedInputSchema';

export const TagUpdateWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.TagUpdateWithoutTaskTemplatesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nsfw: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  skills: z.lazy(() => SkillsToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  paths: z.lazy(() => SkillPathsToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  followers: z.lazy(() => PersonsToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  tasks: z.lazy(() => TagsToTasksUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default TagUpdateWithoutTaskTemplatesInputSchema;
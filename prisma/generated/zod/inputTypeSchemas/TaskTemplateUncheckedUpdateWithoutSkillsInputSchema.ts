import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdatelinksInputSchema } from './TaskTemplateUpdatelinksInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema } from './TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema';
import { TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema } from './TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema';
import { TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { TaskUncheckedUpdateManyWithoutTemplateNestedInputSchema } from './TaskUncheckedUpdateManyWithoutTemplateNestedInputSchema';

export const TaskTemplateUncheckedUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.TaskTemplateUncheckedUpdateWithoutSkillsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => TaskTemplateUpdatelinksInputSchema),z.string().array() ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  implementations: z.lazy(() => TaskUncheckedUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default TaskTemplateUncheckedUpdateWithoutSkillsInputSchema;

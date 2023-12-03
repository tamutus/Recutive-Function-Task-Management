import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdatelinksInputSchema } from './TaskTemplateUpdatelinksInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { TaskTemplateLinkUpdateManyWithoutPrecursorNestedInputSchema } from './TaskTemplateLinkUpdateManyWithoutPrecursorNestedInputSchema';
import { TaskTemplateLinkUpdateManyWithoutSuccessorNestedInputSchema } from './TaskTemplateLinkUpdateManyWithoutSuccessorNestedInputSchema';
import { SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { TagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './TagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { EnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './EnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema } from './PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema';
import { TaskUpdateManyWithoutTemplateNestedInputSchema } from './TaskUpdateManyWithoutTemplateNestedInputSchema';

export const TaskTemplateUpdateInputSchema: z.ZodType<Prisma.TaskTemplateUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => TaskTemplateUpdatelinksInputSchema),z.string().array() ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkUpdateManyWithoutPrecursorNestedInputSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  skills: z.lazy(() => SkillsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema).optional(),
  implementations: z.lazy(() => TaskUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default TaskTemplateUpdateInputSchema;

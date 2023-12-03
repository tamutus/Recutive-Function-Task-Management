import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdatelinksInputSchema } from './TaskUpdatelinksInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema } from './TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema';
import { TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema } from './TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema';
import { ProjectsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './ProjectsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PrioritiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PrioritiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { TagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './TagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PrivateTagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PrivateTagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema';

export const TaskUncheckedUpdateWithoutWorkInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutWorkInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => TaskUpdatelinksInputSchema),z.string().array() ]).optional(),
  templateId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  publicAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precursors: z.lazy(() => TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema).optional(),
  successors: z.lazy(() => TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  skills: z.lazy(() => SkillsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  tags: z.lazy(() => TagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema).optional()
}).strict();

export default TaskUncheckedUpdateWithoutWorkInputSchema;

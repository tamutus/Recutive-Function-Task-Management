import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdatelinksInputSchema } from './TaskUpdatelinksInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdateOneWithoutImplementationsNestedInputSchema } from './TaskTemplateUpdateOneWithoutImplementationsNestedInputSchema';
import { TaskLinkUpdateManyWithoutPrecursorNestedInputSchema } from './TaskLinkUpdateManyWithoutPrecursorNestedInputSchema';
import { TaskLinkUpdateManyWithoutSuccessorNestedInputSchema } from './TaskLinkUpdateManyWithoutSuccessorNestedInputSchema';
import { ProjectsToTasksUpdateManyWithoutTaskNestedInputSchema } from './ProjectsToTasksUpdateManyWithoutTaskNestedInputSchema';
import { TaskWorkUpdateManyWithoutTaskNestedInputSchema } from './TaskWorkUpdateManyWithoutTaskNestedInputSchema';
import { SkillsToTasksUpdateManyWithoutTaskNestedInputSchema } from './SkillsToTasksUpdateManyWithoutTaskNestedInputSchema';
import { PrioritiesToTasksUpdateManyWithoutTaskNestedInputSchema } from './PrioritiesToTasksUpdateManyWithoutTaskNestedInputSchema';
import { PrivateTagsToTasksUpdateManyWithoutTaskNestedInputSchema } from './PrivateTagsToTasksUpdateManyWithoutTaskNestedInputSchema';
import { EnergiesToTasksUpdateManyWithoutTaskNestedInputSchema } from './EnergiesToTasksUpdateManyWithoutTaskNestedInputSchema';
import { PrivateEnergiesToTasksUpdateManyWithoutTaskNestedInputSchema } from './PrivateEnergiesToTasksUpdateManyWithoutTaskNestedInputSchema';
import { PersonUpdateOneWithoutTasksNestedInputSchema } from './PersonUpdateOneWithoutTasksNestedInputSchema';

export const TaskUpdateWithoutTagsInputSchema: z.ZodType<Prisma.TaskUpdateWithoutTagsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => TaskUpdatelinksInputSchema),z.string().array() ]).optional(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  publicAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  template: z.lazy(() => TaskTemplateUpdateOneWithoutImplementationsNestedInputSchema).optional(),
  precursors: z.lazy(() => TaskLinkUpdateManyWithoutPrecursorNestedInputSchema).optional(),
  successors: z.lazy(() => TaskLinkUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  work: z.lazy(() => TaskWorkUpdateManyWithoutTaskNestedInputSchema).optional(),
  skills: z.lazy(() => SkillsToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksUpdateManyWithoutTaskNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export default TaskUpdateWithoutTagsInputSchema;

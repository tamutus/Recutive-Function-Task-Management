import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdatelinksInputSchema } from './ProjectUpdatelinksInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PersonsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProjectsToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectsToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema';

export const ProjectUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => ProjectUpdatelinksInputSchema),z.string().array() ]).optional(),
  templateId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  publicAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteers: z.lazy(() => PersonsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export default ProjectUncheckedUpdateWithoutTasksInputSchema;

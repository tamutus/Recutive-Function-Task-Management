import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdatelinksInputSchema } from './ProjectUpdatelinksInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProjectTemplateUpdateOneWithoutImplementationsNestedInputSchema } from './ProjectTemplateUpdateOneWithoutImplementationsNestedInputSchema';
import { PersonsToProjectsUpdateManyWithoutProjectNestedInputSchema } from './PersonsToProjectsUpdateManyWithoutProjectNestedInputSchema';
import { ProjectsToTasksUpdateManyWithoutProjectNestedInputSchema } from './ProjectsToTasksUpdateManyWithoutProjectNestedInputSchema';
import { PrioritiesToProjectsUpdateManyWithoutProjectNestedInputSchema } from './PrioritiesToProjectsUpdateManyWithoutProjectNestedInputSchema';
import { ProjectsToTagsUpdateManyWithoutProjectNestedInputSchema } from './ProjectsToTagsUpdateManyWithoutProjectNestedInputSchema';
import { PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInputSchema } from './PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInputSchema';
import { PrivateTagsToProjectsUpdateManyWithoutProjectNestedInputSchema } from './PrivateTagsToProjectsUpdateManyWithoutProjectNestedInputSchema';

export const ProjectUpdateWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutEnergiesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => ProjectUpdatelinksInputSchema),z.string().array() ]).optional(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  publicAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  template: z.lazy(() => ProjectTemplateUpdateOneWithoutImplementationsNestedInputSchema).optional(),
  volunteers: z.lazy(() => PersonsToProjectsUpdateManyWithoutProjectNestedInputSchema).optional(),
  tasks: z.lazy(() => ProjectsToTasksUpdateManyWithoutProjectNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsUpdateManyWithoutProjectNestedInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export default ProjectUpdateWithoutEnergiesInputSchema;
import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagNestedInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagNestedInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToProjectsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PrivateTagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema';

export const PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagUncheckedUpdateWithoutPrivateEnergiesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nsfw: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagNestedInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema;

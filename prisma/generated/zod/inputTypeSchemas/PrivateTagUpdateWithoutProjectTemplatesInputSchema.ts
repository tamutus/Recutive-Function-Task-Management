import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';
import { PrivateTagsToProjectsUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToProjectsUpdateManyWithoutTagNestedInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyWithoutTagNestedInputSchema';
import { PrivateTagsToTasksUpdateManyWithoutTagNestedInputSchema } from './PrivateTagsToTasksUpdateManyWithoutTagNestedInputSchema';
import { PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema } from './PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema';
import { EnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema } from './EnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema';

export const PrivateTagUpdateWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUpdateWithoutProjectTemplatesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nsfw: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsUpdateManyWithoutTagNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithoutTagNestedInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksUpdateManyWithoutTagNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default PrivateTagUpdateWithoutProjectTemplatesInputSchema;

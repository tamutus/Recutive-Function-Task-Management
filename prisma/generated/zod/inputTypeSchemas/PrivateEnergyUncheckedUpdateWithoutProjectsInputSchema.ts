import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdatemusicInputSchema } from './PrivateEnergyUpdatemusicInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema';

export const PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateEnergyUncheckedUpdateWithoutProjectsInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  music: z.union([ z.lazy(() => PrivateEnergyUpdatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  skills: z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tags: z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional()
}).strict();

export default PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema;

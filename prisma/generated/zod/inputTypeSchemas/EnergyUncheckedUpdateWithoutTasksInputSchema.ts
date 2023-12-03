import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdatemusicInputSchema } from './EnergyUpdatemusicInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema';

export const EnergyUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.EnergyUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  music: z.union([ z.lazy(() => EnergyUpdatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  skills: z.lazy(() => EnergiesToSkillsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  experiences: z.lazy(() => EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema).optional()
}).strict();

export default EnergyUncheckedUpdateWithoutTasksInputSchema;

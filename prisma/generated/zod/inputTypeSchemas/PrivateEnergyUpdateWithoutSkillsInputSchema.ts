import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdatemusicInputSchema } from './PrivateEnergyUpdatemusicInputSchema';
import { PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema';

export const PrivateEnergyUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateWithoutSkillsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  music: z.union([ z.lazy(() => PrivateEnergyUpdatemusicInputSchema),z.string().array() ]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tags: z.lazy(() => PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema).optional(),
  projects: z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema).optional()
}).strict();

export default PrivateEnergyUpdateWithoutSkillsInputSchema;

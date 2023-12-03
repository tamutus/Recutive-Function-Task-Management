import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdatemusicInputSchema } from './EnergyUpdatemusicInputSchema';
import { EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema';
import { EnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema } from './EnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema';

export const EnergyUpdateWithoutExperiencesInputSchema: z.ZodType<Prisma.EnergyUpdateWithoutExperiencesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  music: z.union([ z.lazy(() => EnergyUpdatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema).optional(),
  skills: z.lazy(() => EnergiesToSkillsUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema).optional(),
  tasks: z.lazy(() => EnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema).optional()
}).strict();

export default EnergyUpdateWithoutExperiencesInputSchema;

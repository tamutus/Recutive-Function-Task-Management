import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUpdateManyWithoutSkillNestedInputSchema } from './SkillsToSkillPathsUpdateManyWithoutSkillNestedInputSchema';
import { SkillLinkUpdateManyWithoutSuccessorNestedInputSchema } from './SkillLinkUpdateManyWithoutSuccessorNestedInputSchema';
import { SkillsToTaskTemplatesUpdateManyWithoutSkillNestedInputSchema } from './SkillsToTaskTemplatesUpdateManyWithoutSkillNestedInputSchema';
import { SkillsToTasksUpdateManyWithoutSkillNestedInputSchema } from './SkillsToTasksUpdateManyWithoutSkillNestedInputSchema';
import { PersonsToSkillsUpdateManyWithoutSkillNestedInputSchema } from './PersonsToSkillsUpdateManyWithoutSkillNestedInputSchema';
import { EnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema } from './EnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema';
import { PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema } from './PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema';
import { PrioritiesToSkillsUpdateManyWithoutSkillNestedInputSchema } from './PrioritiesToSkillsUpdateManyWithoutSkillNestedInputSchema';
import { SkillsToTagsUpdateManyWithoutSkillNestedInputSchema } from './SkillsToTagsUpdateManyWithoutSkillNestedInputSchema';

export const SkillUpdateWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillUpdateWithoutPrecedesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsUpdateManyWithoutSkillNestedInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesUpdateManyWithoutSkillNestedInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksUpdateManyWithoutSkillNestedInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsUpdateManyWithoutSkillNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsUpdateManyWithoutSkillNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsUpdateManyWithoutSkillNestedInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export default SkillUpdateWithoutPrecedesInputSchema;

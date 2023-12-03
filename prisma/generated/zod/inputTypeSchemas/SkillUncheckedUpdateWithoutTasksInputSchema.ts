import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { SkillLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema } from './SkillLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema';
import { SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema } from './SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { SkillsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './SkillsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema';

export const SkillUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export default SkillUncheckedUpdateWithoutTasksInputSchema;

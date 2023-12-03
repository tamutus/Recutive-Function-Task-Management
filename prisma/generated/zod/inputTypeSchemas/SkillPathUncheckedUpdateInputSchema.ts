import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema } from './SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema';
import { PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema } from './PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema';
import { SkillPathsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema } from './SkillPathsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema';

export const SkillPathUncheckedUpdateInputSchema: z.ZodType<Prisma.SkillPathUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateManyWithoutSkillPathNestedInputSchema).optional()
}).strict();

export default SkillPathUncheckedUpdateInputSchema;

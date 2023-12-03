import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';

export const SkillPathUpdateWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathUpdateWithoutTagsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional()
}).strict();

export default SkillPathUpdateWithoutTagsInputSchema;

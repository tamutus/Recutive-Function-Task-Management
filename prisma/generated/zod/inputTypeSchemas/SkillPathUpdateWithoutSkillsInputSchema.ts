import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema } from './SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';

export const SkillPathUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathUpdateWithoutSkillsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  students: z.lazy(() => PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional()
}).strict();

export default SkillPathUpdateWithoutSkillsInputSchema;

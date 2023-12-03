import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema } from './SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema';
import { PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';

export const SkillPathUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathUpdateWithoutStudentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional()
}).strict();

export default SkillPathUpdateWithoutStudentsInputSchema;

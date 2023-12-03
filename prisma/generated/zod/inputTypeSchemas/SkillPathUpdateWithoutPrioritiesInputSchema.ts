import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema } from './PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema';
import { SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema } from './SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema';

export const SkillPathUpdateWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathUpdateWithoutPrioritiesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsUpdateManyWithoutSkillPathNestedInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export default SkillPathUpdateWithoutPrioritiesInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema';

export const PersonsToSkillPathsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateWithoutPersonInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillPathsUpdateWithoutPersonInputSchema;

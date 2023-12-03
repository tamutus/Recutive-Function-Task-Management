import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema';
import { SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema';

export const PersonsToSkillPathsUpdateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema).optional(),
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutStudentsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillPathsUpdateInputSchema;

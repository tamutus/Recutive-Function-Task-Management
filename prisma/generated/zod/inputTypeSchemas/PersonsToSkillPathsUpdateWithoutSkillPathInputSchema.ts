import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema';

export const PersonsToSkillPathsUpdateWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateWithoutSkillPathInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutSkillPathsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillPathsUpdateWithoutSkillPathInputSchema;

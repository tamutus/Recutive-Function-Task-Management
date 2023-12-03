import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { SkillUpdateOneRequiredWithoutStudentsNestedInputSchema } from './SkillUpdateOneRequiredWithoutStudentsNestedInputSchema';

export const PersonsToSkillsUpdateInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutStudentsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillsUpdateInputSchema;

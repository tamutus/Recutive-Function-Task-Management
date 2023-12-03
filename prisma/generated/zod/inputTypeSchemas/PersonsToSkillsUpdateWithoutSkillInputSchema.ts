import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const PersonsToSkillsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateWithoutSkillInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillsUpdateWithoutSkillInputSchema;

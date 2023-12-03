import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutStudentsNestedInputSchema } from './SkillUpdateOneRequiredWithoutStudentsNestedInputSchema';

export const PersonsToSkillsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateWithoutPersonInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutStudentsNestedInputSchema).optional()
}).strict();

export default PersonsToSkillsUpdateWithoutPersonInputSchema;

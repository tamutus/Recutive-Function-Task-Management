import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutStudentsInputSchema } from './SkillCreateNestedOneWithoutStudentsInputSchema';

export const PersonsToSkillsCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateWithoutPersonInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutStudentsInputSchema)
}).strict();

export default PersonsToSkillsCreateWithoutPersonInputSchema;

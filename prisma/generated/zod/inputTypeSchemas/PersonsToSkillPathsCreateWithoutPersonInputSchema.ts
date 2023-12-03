import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutStudentsInputSchema } from './SkillPathCreateNestedOneWithoutStudentsInputSchema';

export const PersonsToSkillPathsCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateWithoutPersonInput> = z.object({
  notes: z.string().optional().nullable(),
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutStudentsInputSchema)
}).strict();

export default PersonsToSkillPathsCreateWithoutPersonInputSchema;

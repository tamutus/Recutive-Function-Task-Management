import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutSkillPathsInputSchema } from './PersonCreateNestedOneWithoutSkillPathsInputSchema';
import { SkillPathCreateNestedOneWithoutStudentsInputSchema } from './SkillPathCreateNestedOneWithoutStudentsInputSchema';

export const PersonsToSkillPathsCreateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutSkillPathsInputSchema),
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutStudentsInputSchema)
}).strict();

export default PersonsToSkillPathsCreateInputSchema;

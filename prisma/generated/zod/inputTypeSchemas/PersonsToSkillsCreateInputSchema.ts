import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutSkillsInputSchema } from './PersonCreateNestedOneWithoutSkillsInputSchema';
import { SkillCreateNestedOneWithoutStudentsInputSchema } from './SkillCreateNestedOneWithoutStudentsInputSchema';

export const PersonsToSkillsCreateInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutSkillsInputSchema),
  skill: z.lazy(() => SkillCreateNestedOneWithoutStudentsInputSchema)
}).strict();

export default PersonsToSkillsCreateInputSchema;

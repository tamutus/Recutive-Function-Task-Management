import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutSkillsInputSchema } from './PersonCreateNestedOneWithoutSkillsInputSchema';

export const PersonsToSkillsCreateWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateWithoutSkillInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default PersonsToSkillsCreateWithoutSkillInputSchema;

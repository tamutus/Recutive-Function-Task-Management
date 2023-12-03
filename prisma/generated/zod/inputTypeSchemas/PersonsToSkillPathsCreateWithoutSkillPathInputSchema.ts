import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutSkillPathsInputSchema } from './PersonCreateNestedOneWithoutSkillPathsInputSchema';

export const PersonsToSkillPathsCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateWithoutSkillPathInput> = z.object({
  notes: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutSkillPathsInputSchema)
}).strict();

export default PersonsToSkillPathsCreateWithoutSkillPathInputSchema;

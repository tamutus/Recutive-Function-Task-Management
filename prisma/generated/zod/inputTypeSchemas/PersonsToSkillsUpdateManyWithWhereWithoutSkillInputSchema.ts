import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsScalarWhereInputSchema } from './PersonsToSkillsScalarWhereInputSchema';
import { PersonsToSkillsUpdateManyMutationInputSchema } from './PersonsToSkillsUpdateManyMutationInputSchema';
import { PersonsToSkillsUncheckedUpdateManyWithoutSkillInputSchema } from './PersonsToSkillsUncheckedUpdateManyWithoutSkillInputSchema';

export const PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => PersonsToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillsUpdateManyMutationInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema;

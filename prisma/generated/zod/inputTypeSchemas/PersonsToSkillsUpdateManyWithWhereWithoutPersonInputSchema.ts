import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsScalarWhereInputSchema } from './PersonsToSkillsScalarWhereInputSchema';
import { PersonsToSkillsUpdateManyMutationInputSchema } from './PersonsToSkillsUpdateManyMutationInputSchema';
import { PersonsToSkillsUncheckedUpdateManyWithoutPersonInputSchema } from './PersonsToSkillsUncheckedUpdateManyWithoutPersonInputSchema';

export const PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillsUpdateManyMutationInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema;

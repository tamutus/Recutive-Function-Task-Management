import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsScalarWhereInputSchema } from './PersonsToSkillPathsScalarWhereInputSchema';
import { PersonsToSkillPathsUpdateManyMutationInputSchema } from './PersonsToSkillPathsUpdateManyMutationInputSchema';
import { PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInputSchema';

export const PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpdateManyWithWhereWithoutPersonInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsScalarWhereInputSchema } from './PersonsToSkillPathsScalarWhereInputSchema';
import { PersonsToSkillPathsUpdateManyMutationInputSchema } from './PersonsToSkillPathsUpdateManyMutationInputSchema';
import { PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema';

export const PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateManyWithoutSkillPathInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpdateManyWithWhereWithoutSkillPathInputSchema;

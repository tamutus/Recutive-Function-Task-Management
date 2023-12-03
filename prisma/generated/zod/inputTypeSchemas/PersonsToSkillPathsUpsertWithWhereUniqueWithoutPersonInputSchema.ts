import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithoutPersonInputSchema } from './PersonsToSkillPathsUpdateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema';
import { PersonsToSkillPathsCreateWithoutPersonInputSchema } from './PersonsToSkillPathsCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpsertWithWhereUniqueWithoutPersonInputSchema;

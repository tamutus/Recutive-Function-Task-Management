import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithoutPersonInputSchema } from './PersonsToSkillsUpdateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema';
import { PersonsToSkillsCreateWithoutPersonInputSchema } from './PersonsToSkillsCreateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToSkillsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema;

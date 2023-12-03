import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsUpdateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUpdateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default PersonsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema;

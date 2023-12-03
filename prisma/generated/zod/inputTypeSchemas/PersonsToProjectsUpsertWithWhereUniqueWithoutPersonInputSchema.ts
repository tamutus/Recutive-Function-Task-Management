import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithoutPersonInputSchema } from './PersonsToProjectsUpdateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema';
import { PersonsToProjectsCreateWithoutPersonInputSchema } from './PersonsToProjectsCreateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToProjectsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema;

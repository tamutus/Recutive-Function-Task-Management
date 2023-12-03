import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithoutProjectInputSchema } from './PersonsToProjectsUpdateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema';
import { PersonsToProjectsCreateWithoutProjectInputSchema } from './PersonsToProjectsCreateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema;
